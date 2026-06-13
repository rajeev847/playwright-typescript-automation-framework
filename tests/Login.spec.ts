import { test, expect } from '@playwright/test';

test('Verify Login Page', async ({ page }) => {
  await page.goto('https://example.com');

  await expect(page).toHaveTitle(/Example/);
});
