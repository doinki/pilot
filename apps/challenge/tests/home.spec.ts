import { expect, test } from '@playwright/test';

test('toHaveTitle', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Challenge');
});
