import { chromium } from 'playwright'

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; font-family:'Inter',sans-serif; background:#06070f; color:#e8eaf4; overflow:hidden; }
  .wrap { position:relative; width:100%; height:100%; padding:72px 76px; display:flex; flex-direction:column; justify-content:space-between; }
  .blob { position:absolute; border-radius:9999px; filter:blur(90px); opacity:.55; }
  .b1 { width:420px; height:420px; top:-140px; left:-120px; background:#7c5cff; }
  .b2 { width:380px; height:380px; top:-100px; right:-100px; background:#22d3ee; opacity:.4; }
  .b3 { width:360px; height:360px; bottom:-180px; right:20%; background:#34d399; opacity:.35; }
  .grid { position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px); background-size:52px 52px; -webkit-mask-image:radial-gradient(ellipse 70% 60% at 30% 0%,#000,transparent); }
  .row { position:relative; display:flex; align-items:center; gap:16px; }
  .badge { display:inline-flex; align-items:center; gap:10px; border:1px solid rgba(52,211,153,.3); background:rgba(52,211,153,.08); color:#34d399; padding:8px 16px; border-radius:999px; font-size:18px; font-weight:600; }
  .dot { width:9px; height:9px; border-radius:50%; background:#34d399; }
  .mono { font-family:'JetBrains Mono',monospace; }
  h1 { font-family:'Sora',sans-serif; font-weight:800; font-size:82px; line-height:1.02; letter-spacing:-.02em; color:#fff; }
  .grad { background:linear-gradient(100deg,#a78bff,#22d3ee 55%,#34d399); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .role { margin-top:20px; font-size:30px; font-weight:600; color:#cfd3e6; }
  .tag { margin-top:14px; font-size:21px; color:#9aa1b8; max-width:820px; }
  .chips { display:flex; gap:12px; margin-top:6px; flex-wrap:wrap; }
  .chip { border:1px solid rgba(255,255,255,.1); background:rgba(255,255,255,.03); color:#c9cee0; padding:9px 16px; border-radius:12px; font-size:18px; font-family:'JetBrains Mono',monospace; }
  .logo { width:64px; height:64px; border-radius:18px; display:grid; place-items:center; font-family:'Sora',sans-serif; font-weight:800; font-size:30px; color:#fff;
    background:linear-gradient(#0a0c18,#0a0c18) padding-box, linear-gradient(130deg,#7c5cff,#22d3ee,#34d399) border-box; border:2px solid transparent; }
  .foot { position:relative; display:flex; align-items:center; justify-content:space-between; color:#9aa1b8; font-size:20px; }
  .foot .mono { color:#7c5cff; }
</style></head>
<body><div class="wrap">
  <div class="blob b1"></div><div class="blob b2"></div><div class="blob b3"></div><div class="grid"></div>
  <div class="row" style="justify-content:space-between">
    <div class="row"><div class="logo">M</div><span style="font-family:'Sora';font-weight:700;font-size:26px;color:#fff">Mohit<span style="color:#7c5cff">.</span></span></div>
    <div class="badge"><span class="dot"></span> Available for work</div>
  </div>
  <div class="row" style="flex-direction:column;align-items:flex-start;gap:0">
    <h1>I build &amp; ship<br><span class="grad">AI products</span> that work.</h1>
    <div class="role">AI Product Manager · AI Engineer · Founder</div>
    <div class="tag">One partner for Product, Engineering &amp; Data — shipping production AI at India scale.</div>
    <div class="chips" style="margin-top:26px">
      <span class="chip">LLMs &amp; RAG</span><span class="chip">Voice AI</span><span class="chip">Quant ML</span><span class="chip">Automation</span><span class="chip">Full-stack</span>
    </div>
  </div>
  <div class="foot">
    <span class="mono">github.com/Mohit1053 · linkedin.com/in/mohit1005</span>
    <span>Technical PM @ Times Internet · IIIT-Delhi</span>
  </div>
</div></body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.waitForTimeout(700)
await page.screenshot({ path: 'public/og-image.png' })
await browser.close()
console.log('og-image.png written')
