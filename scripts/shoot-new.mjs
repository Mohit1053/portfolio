import { chromium } from 'playwright'

const BASE = 'http://localhost:4176/'
const browser = await chromium.launch()
const errors = []

async function grab(theme, id, name) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  page.on('console', (m) => m.type() === 'error' && errors.push(`[${name}] ${m.text()}`))
  page.on('pageerror', (e) => errors.push(`[${name}] ${String(e)}`))
  await page.addInitScript((t) => localStorage.setItem('theme', t), theme)
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(700)
  if (id !== 'top') {
    await page.evaluate((sid) => {
      const el = document.getElementById(sid)
      if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 80)
    }, id)
    await page.waitForTimeout(600)
  }
  await page.screenshot({ path: `shots/${name}.png` })
  await ctx.close()
}

await grab('dark', 'top', 'new-hero-dark')
await grab('dark', 'testimonials', 'new-testimonials-dark')
await grab('light', 'testimonials', 'new-testimonials-light')
await grab('dark', 'writing', 'new-writing-dark')
await grab('light', 'writing', 'new-writing-light')

console.log('CONSOLE/PAGE ERRORS:', errors.length ? errors : 'none')
await browser.close()
