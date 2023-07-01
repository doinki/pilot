import { expect, test } from '@playwright/test';

import { stories } from '../storybook-static/stories.json';

Object.values(stories)
  .filter(({ id }) => !id.endsWith('--docs'))
  .forEach(({ id, name, title }) => {
    test(`${title} ${name}`, async ({ baseURL, page }) => {
      const url = new URL('iframe.html', baseURL);
      url.searchParams.set('id', id);
      url.searchParams.set('viewMode', 'story');

      await page.goto(url.toString());

      await expect(page).toHaveScreenshot();
    });
  });
