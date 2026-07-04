import { chromium } from 'playwright'

const BASE = 'http://localhost:4175/'
const browser = await chromium.launch()
const errors = []
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const page = await ctx.newPage()
page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
page.on('pageerror', (e) => errors.push(String(e)))
await page.addInitScript(() => localStorage.setItem('theme', 'light'))
await page.goto(BASE, { waitUntil: 'networkidle' })
await page.waitForTimeout(700)

// scroll to each section by id and screenshot its top region
const ids = ['about', 'services', 'impact', 'experience', 'skills', 'contact']
for (const id of ids) {
  const found = await page.evaluate((sid) => {
    const el = document.getElementById(sid)
    if (!el) return false
    window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80)
    return true
  }, id)
  await page.waitForTimeout(500)
  await page.screenshot({ path: `shots/light-${id}.png` })
  if (!found) console.log('  (no #' + id + ')')
}
console.log('CONSOLE/PAGE ERRORS:', errors.length ? errors : 'none')
await browser.close()
