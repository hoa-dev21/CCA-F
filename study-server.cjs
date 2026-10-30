const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {spawn}=require('node:child_process');
const {ROOT,GROUPS,lessons,library,recommended,chatContext}=require('./study-web/library.cjs');
const {createBridge}=require('./study-web/codex-bridge.cjs');
const PORT=Number(process.env.STUDY_PORT||43130),HOST='127.0.0.1';
const token=crypto.randomBytes(24).toString('hex');
const bridge=createBridge(ROOT),sessions=new Map();
const allowedHosts=new Set([`${HOST}:${PORT}`,`localhost:${PORT}`]);
const allowedOrigins=new Set([`http://${HOST}:${PORT}`,`http://localhost:${PORT}`]);
const assets={'/':'index.html','/app.js':'app.js','/styles.css':'styles.css','/favicon.svg':'favicon.svg','/fonts/NotoSerif-Variable.ttf':'fonts/NotoSerif-Variable.ttf','/fonts/NotoSans-Variable.ttf':'fonts/NotoSans-Variable.ttf'};
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.ttf':'font/ttf'};
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));}
async function body(req){let text='';for await(const chunk of req){text+=chunk;if(Buffer.byteLength(text)>65000)throw Object.assign(new Error('Câu hỏi quá dài.'),{status:413});}try{return JSON.parse(text);}catch{throw Object.assign(new Error('Dữ liệu không hợp lệ.'),{status:400});}}
function errorMessage(e){if(e.code==='LOGIN_REQUIRED'||e.code==='CHATGPT_LOGIN_REQUIRED'||e.code==='HOME_UNAVAILABLE')return e.message;if(/limit|quota|usage|rate/i.test(e.message))return 'Tài khoản đang chạm giới hạn sử dụng. Hãy thử lại sau hoặc sao chép câu hỏi để hỏi trong cuộc trò chuyện này.';if(e.message==='CHAT_CANCELLED')return 'Đã dừng câu trả lời.';if(e.message==='SESSION_EXPIRED')return 'Phiên gia sư đã đóng. Bắt đầu phiên mới để tiếp tục.';return 'Chưa nhận được câu trả lời từ Codex. Kiểm tra đăng nhập/kết nối rồi thử lại; bạn có thể dùng nút sao chép câu hỏi.';}
const server=http.createServer(async(req,res)=>{
  res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('Referrer-Policy','no-referrer');
  res.setHeader('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'");
  if(!allowedHosts.has(req.headers.host))return json(res,403,{error:'Host không được phép.'});
  const url=new URL(req.url,`http://${HOST}:${PORT}`);
  try{
    if(req.method==='GET'&&assets[url.pathname]){const file=assets[url.pathname];res.writeHead(200,{'Content-Type':mime[path.extname(file)],'Cache-Control':'no-cache'});return res.end(fs.readFileSync(path.join(ROOT,'study-web',file)));}
    if(req.method==='GET'&&url.pathname==='/api/library')return json(res,200,{lessons:library,groups:GROUPS,recommended,totalQuestions:[...lessons.values()].reduce((n,l)=>n+l.questions.length,0),token});
    if(req.method==='GET'&&url.pathname==='/api/lesson'){const l=lessons.get(url.searchParams.get('id'));if(!l)return json(res,404,{error:'Không tìm thấy bài học.'});const {raw,...visible}=l;return json(res,200,visible);}
    if(req.method==='GET'&&url.pathname==='/api/chat/status')return json(res,200,await bridge.status());
    if(req.method==='POST'){
      if(!allowedOrigins.has(req.headers.origin)||req.headers['x-study-token']!==token)return json(res,403,{error:'Yêu cầu phải được gửi từ trang học local.'});
      if(!req.headers['content-type']?.startsWith('application/json'))return json(res,415,{error:'Định dạng không được hỗ trợ.'});
      const data=await body(req);
      if(url.pathname==='/api/chat/reconnect'){bridge.close();sessions.clear();return json(res,200,await bridge.status());}
      if(url.pathname!=='/api/chat')return json(res,404,{error:'Không tìm thấy chức năng.'});
      const lesson=lessons.get(data.lessonId);if(!lesson)return json(res,400,{error:'Hãy chọn một bài học.'});
      if(typeof data.message!=='string'||!data.message.trim()||data.message.length>6000)return json(res,400,{error:'Nhập câu hỏi từ 1 đến 6.000 ký tự.'});
      let session=sessions.get(data.sessionId);
      if(!session||session.lessonId!==lesson.id){if(sessions.size>200)return json(res,429,{error:'Đã có nhiều phiên. Khởi động lại web để bắt đầu phiên mới.'});const thread=await bridge.newThread();session={id:crypto.randomUUID(),threadId:thread.threadId,lessonId:lesson.id,busy:false};sessions.set(session.id,session);}
      if(session.busy)return json(res,409,{error:'Gia sư đang trả lời. Hãy chờ hoặc dừng câu hiện tại.'});session.busy=true;
      const controller=new AbortController();let ended=false;
      res.writeHead(200,{'Content-Type':'text/event-stream; charset=utf-8','Cache-Control':'no-cache','Connection':'keep-alive','X-Accel-Buffering':'no'});
      const event=(type,payload)=>{if(!res.destroyed)res.write(`event: ${type}\ndata: ${JSON.stringify(payload)}\n\n`);};
      event('session',{sessionId:session.id});
      const heartbeat=setInterval(()=>{if(!res.destroyed)res.write(': ping\n\n');},15000);
      res.on('close',()=>{if(!ended)controller.abort();});
      try{
        const context=chatContext(lesson.id,data.questionId);
        const history=Array.isArray(data.history)?data.history.slice(-6).filter(m=>['user','assistant'].includes(m.role)&&typeof m.text==='string').map(m=>({role:m.role,text:m.text.slice(0,3000)})):[];
        const input=`<study_reference>\n${context}\n</study_reference>\n${data.sessionId===session.id?'':`<recent_conversation>\n${JSON.stringify(history)}\n</recent_conversation>\n`}Câu hỏi hiện tại của người học:\n${data.message.trim()}`;
        await bridge.runTurn(session.threadId,input,delta=>event('delta',{text:delta}),controller.signal);
        event('done',{});
      }catch(e){event('chat-error',{message:errorMessage(e)});}
      finally{session.busy=false;ended=true;clearInterval(heartbeat);res.end();}
      return;
    }
    return json(res,404,{error:'Không tìm thấy trang.'});
  }catch(e){if(!res.headersSent)json(res,e.status||503,{error:e.status?e.message:errorMessage(e)});else res.end();}
});
server.listen(PORT,HOST,()=>{
  const url=`http://${HOST}:${PORT}`;console.log(`Architect Study → ${url}`);
  if(process.argv.includes('--open')){if(process.platform==='win32')spawn('explorer.exe',[url],{windowsHide:true,stdio:'ignore'}).unref();else if(process.platform==='darwin')spawn('open',[url],{stdio:'ignore'}).unref();}
});
server.on('error',e=>{console.error(e.code==='EADDRINUSE'?`Cổng ${PORT} đang được dùng. Mở http://${HOST}:${PORT} hoặc đặt STUDY_PORT khác.`:'Không mở được web local.');bridge.close();process.exitCode=1;});
function shutdown(){bridge.close();server.close(()=>process.exit(0));setTimeout(()=>process.exit(0),1500).unref();}
process.on('SIGINT',shutdown);process.on('SIGTERM',shutdown);
