const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');
(async () => {
  const userWindow = process.argv.includes('--user-window');
  const port = userWindow ? 43128 : 43127;
  const context = await chromium.launchPersistentContext(userWindow ? './.browser-profile-user' : './.browser-profile', {
    channel: 'msedge', headless: false, viewport: null,
  });
  const page = context.pages()[0] || await context.newPage();
  await page.goto(userWindow ? 'https://anthropic-partners.skilljar.com/auth/login?next=%2Fclaude-with-the-anthropic-api' : 'https://anthropic-partners.skilljar.com/page/claude-certified-architect-foundations-prep-courses', {waitUntil:'domcontentloaded'});
  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      if (url.pathname === '/media') {
        const active = context.pages().at(-1);
        if (!/^https:\/\/anthropic(?:-partners)?\.skilljar\.com\//.test(active.url()) || /\/auth\//.test(active.url())) throw Error('Open an official lesson first');
        const media = await active.evaluate(() => {
          const players = [];
          if (typeof window.jwplayer === 'function') {
            for (const el of document.querySelectorAll('.jwplayer[id]')) {
              try { players.push({id:el.id, playlist:window.jwplayer(el.id).getPlaylist(), captions:window.jwplayer(el.id).getCaptionsList()}); } catch (_) {}
            }
          }
          return {
            players,
            videos:[...document.querySelectorAll('video')].map(v=>({src:v.currentSrc||v.src,tracks:[...v.querySelectorAll('track')].map(t=>({src:t.src,kind:t.kind,label:t.label,srclang:t.srclang})),sources:[...v.querySelectorAll('source')].map(s=>({src:s.src,type:s.type}))})),
            iframes:[...document.querySelectorAll('iframe[src]')].map(f=>({src:f.src,title:f.title})),
          };
        });
        res.setHeader('Content-Type','application/json; charset=utf-8');
        res.end(JSON.stringify({url:active.url(),...media}));
      } else if (url.pathname === '/links') {
        res.setHeader('Content-Type','application/json; charset=utf-8');
        res.end(JSON.stringify(await context.pages().at(-1).locator('a[href]').evaluateAll(els=>els.map(a=>({text:a.innerText,href:a.href})))));
      } else if (url.pathname === '/goto') {
        const target = url.searchParams.get('url');
        if (!target || !/^https:\/\/anthropic(?:-partners)?\.skilljar\.com\//.test(target)) throw Error('Only official Skilljar navigation allowed');
        await context.pages().at(-1).goto(target,{waitUntil:'domcontentloaded'});
        res.end('ok');
      } else if (url.pathname === '/state') {
        const pages = context.pages();
        const result = [];
        for (const p of pages) {
          const auth = /signin|sign_in|login|auth/i.test(p.url());
          result.push({url:auth ? '(authentication page)' : p.url(), title:await p.title(), text:auth ? '(User login required)' : (await p.locator('body').innerText()).slice(0,70000)});
        }
        res.setHeader('Content-Type','application/json; charset=utf-8');
        res.end(JSON.stringify(result));
      } else { res.writeHead(404); res.end(); }
    } catch(e) {res.writeHead(500);res.end(e.message);}
  });
  server.listen(port, '127.0.0.1', () => console.log('Browser ready; state endpoint on '+port));
  context.on('close', () => {server.close();process.exit(0)});
})().catch(e => {console.error(e.message);process.exit(1)});
