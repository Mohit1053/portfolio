import { chromium } from 'playwright'

// Renders a 180x180 apple-touch-icon from the brand monogram.
const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@800&display=swap" rel="stylesheet">
<style>
  html,body{margin:0}
  .card{width:180px;height:180px;background:#06070f;display:grid;place-items:center}
  .m{width:132px;height:132px;border-radius:38px;display:grid;place-items:center;
     font-family:'Sora',sans-serif;font-weight:800;font-size:78px;color:#fff;
     background:linear-gradient(#0a0c18,#0a0c18) padding-box,
       linear-gradient(130deg,#7c5cff,#22d3ee,#34d399) border-box;border:4px solid transparent}
</style></head>
<body><div class="card"><div class="m">M</div></div></body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 180, height: 180 }, deviceScaleFactor: 1 })
await page.setContent(html, { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
await page.screenshot({ path: 'public/apple-touch-icon.png' })
await browser.close()
console.log('apple-touch-icon.png written')
