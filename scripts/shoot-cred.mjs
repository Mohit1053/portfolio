import { chromium } from 'playwright'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const errors = []
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
page.on('pageerror', (e) => errors.push(String(e)))
await page.goto('http://localhost:4174/', { waitUntil: 'networkidle' })
// scroll to just below the hero to capture marquee + credibility + about start
await page.evaluate(() => window.scrollTo(0, window.innerHeight - 120))
await page.waitForTimeout(900)
await page.screenshot({ path: 'shots/credibility.png' })
console.log('CONSOLE/PAGE ERRORS:', errors.length ? errors : 'none')
await browser.close()
