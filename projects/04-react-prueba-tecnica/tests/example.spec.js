// @ts-check
const { test, expect } = require('@playwright/test')

const CAT_IMAGE_URL_PREFIX = 'https://cdn2.thecatapi.com/images/'
const LOCAL_HOST_URL = 'http://localhost:5173/'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_IMAGE_URL_PREFIX)).toBeTruthy()
})
