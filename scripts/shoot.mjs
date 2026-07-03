import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

mkdirSync('shots', { recursive: true })
const url = 'http://localhost:5199/'
const errors = []
const browser = await chromium.launch()

async function newPage(name, width, height) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 })
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`[${name}] console.error: ${m.text()}`)
  })
  page.on('pageerror', (e) => errors.push(`[${name}] pageerror: ${e.message}`))
  await page.goto(url, { waitUntil: 'networkidle' })
  await page.waitForTimeout(1900)
  return page
}

async function scrollThrough(page) {
  await page.evaluate(async () => {
    const h = document.body.scrollHeight
    for (let y = 0; y < h; y += 350) {
      window.scrollTo(0, y)
      await new Promise((r) => setTimeout(r, 90))
    }
    window.scrollTo(0, 0)
    await new Promise((r) => setTimeout(r, 350))
  })
  await page.waitForTimeout(400)
}

// Desktop
const d = await newPage('desktop', 1440, 900)
await d.screenshot({ path: 'shots/desktop-fold.png' })
await scrollThrough(d)
await d.screenshot({ path: 'shots/desktop-full.png', fullPage: true })

// open a project modal
try {
  await d.getByText('details →').first().click()
  await d.waitForTimeout(800)
  await d.screenshot({ path: 'shots/desktop-modal.png' })
  await d.keyboard.press('Escape')
} catch (e) {
  errors.push('modal interaction failed: ' + e.message)
}

// Tablet (verify navbar doesn't overflow at md range)
const t = await newPage('tablet', 820, 900)
await t.screenshot({ path: 'shots/tablet-fold.png' })

// Mobile
const m = await newPage('mobile', 390, 844)
await m.screenshot({ path: 'shots/mobile-fold.png' })
await scrollThrough(m)
await m.screenshot({ path: 'shots/mobile-full.png', fullPage: true })

console.log('CONSOLE/PAGE ERRORS:', errors.length ? '\n' + errors.join('\n') : 'none')
await browser.close()
