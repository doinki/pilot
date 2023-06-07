import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  forbidOnly: !!process.env.CI,
  fullyParallel: true,
  projects: [
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    { name: 'Mobile Safari', use: { ...devices['iPhone 12'] } },
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  reporter: 'html',
  retries: process.env.CI ? 2 : 0,
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:3000', trace: 'on-first-retry' },
  webServer: {
    command: 'pnpm dev',
    reuseExistingServer: !process.env.CI,
    url: 'http://127.0.0.1:3000',
  },
  workers: process.env.CI ? 1 : undefined,
});
