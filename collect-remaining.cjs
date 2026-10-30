const {spawn}=require('child_process');
(async()=>{
 for(const key of ['fluency','claude101','bedrock','vertex']){
  console.log('START '+key);
  const code=await new Promise((resolve,reject)=>{
   const child=spawn(process.execPath,['collect-api.cjs',key],{stdio:'inherit',windowsHide:true});
   child.once('error',reject);child.once('exit',resolve);
  });
  if(code!==0)throw Error('Collector '+key+' exited '+code);
 }
 console.log('REMAINING COLLECTION COMPLETE');
})().catch(e=>{console.error(e.message);process.exit(1)});
