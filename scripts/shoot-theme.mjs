import { chromium } from 'playwright'

const BASE = 'http://localhost:4175/'
const browser = await chromium.launch()
const errors = []

async function shoot(name, { theme, full = false, scrollY = 0 }) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  page.on('console', (m) => m.type() === 'error' && errors.push(`[${name}] ${m.text()}`))
  page.on('pageerror', (e) => errors.push(`[${name}] ${String(e)}`))
  if (theme) await page.addInitScript((t) => localStorage.setItem('theme', t), theme)
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  if (scrollY) {
    await page.evaluate((y) => window.scrollTo(0, y), scrollY)
    await page.waitForTimeout(600)
  }
  await page.screenshot({ path: `shots/${name}.png`, fullPage: full })
  await ctx.close()
}

await shoot('light-full', { theme: 'light', full: true })
await shoot('light-hero', { theme: 'light' })
await shoot('dark-hero', { theme: 'dark' })

console.log('CONSOLE/PAGE ERRORS:', errors.length ? errors : 'none')
await browser.close()
