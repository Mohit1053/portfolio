import { test, expect } from '@playwright/test'

test.describe('portfolio — smoke', () => {
  test('loads with correct title and hero, no uncaught errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(String(e)))

    await page.goto('/')
    await expect(page).toHaveTitle(/Mohit/)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('AI products')

    // Third-party beacons (e.g. Vercel Analytics) 404 off-platform — that's fine.
    // What must be empty is uncaught JS exceptions.
    expect(errors, `page errors:\n${errors.join('\n')}`).toEqual([])
  })

  test('all primary sections are present', async ({ page }) => {
    await page.goto('/')
    for (const id of ['about', 'services', 'work', 'experience', 'testimonials', 'skills', 'writing', 'contact']) {
      await expect(page.locator(`#${id}`)).toHaveCount(1)
    }
  })

  test('theme toggle flips and persists across reload', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    await expect(html).toHaveAttribute('data-theme', 'dark')

    await page.getByRole('button', { name: /switch to (light|dark) theme/i }).click()
    await expect(html).toHaveAttribute('data-theme', 'light')

    await page.reload()
    await expect(html).toHaveAttribute('data-theme', 'light')
  })

  test('project modal opens and closes with Escape', async ({ page }) => {
    await page.goto('/')
    await page.getByText('details →').first().click()

    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog).toContainText(/Highlights/i)

    await page.keyboard.press('Escape')
    await expect(dialog).toBeHidden()
  })

  test('category filter narrows the project grid', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /^Voice AI/ }).click()
    await expect(page.getByText('details →').first()).toBeVisible()
  })

  test('primary nav link scrolls to its section', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' }).click()
    await expect(page).toHaveURL(/#contact$/)
    await expect(page.locator('#contact')).toBeInViewport()
  })

  test('contact form renders and engagement chips are accessible toggles', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#name')).toBeVisible()
    await expect(page.locator('#email')).toBeVisible()
    await expect(page.locator('#message')).toBeVisible()

    const chip = page.getByRole('button', { name: 'Hire me (full-time)' })
    await chip.click()
    await expect(chip).toHaveAttribute('aria-pressed', 'true')
  })

  test('résumé link points to a PDF', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /résumé/i }).first()).toHaveAttribute('href', /\.pdf$/)
  })

  test('404 page renders with a way home', async ({ page }) => {
    await page.goto('/404.html')
    await expect(page.getByText('404')).toBeVisible()
    await expect(page.getByRole('link', { name: /back to portfolio/i })).toBeVisible()
  })
})

test.describe('portfolio — mobile', () => {
  test.use({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })

  test('hamburger opens and closes the menu drawer', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: /open menu/i }).click()

    const drawer = page.getByRole('dialog', { name: /site menu/i })
    await expect(drawer).toBeVisible()
    await expect(drawer.getByRole('link', { name: 'Contact' })).toBeVisible()

    await page.getByRole('button', { name: /close menu/i }).click()
    await expect(drawer).toBeHidden()
  })
})
