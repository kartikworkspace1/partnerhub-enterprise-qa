import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.TEST_ENV || 'staging';

const environments: any = {
  staging: { baseURL: process.env.STAGING_URL },
  production: { baseURL: process.env.PROD_URL }
};

export default defineConfig({
  timeout: 60000,
  retries: 2,
  reporter: [['html'], ['list']],
  use: {
    baseURL: environments[ENV].baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});