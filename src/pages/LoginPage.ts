import { Page, expect } from '@playwright/test';
import { getEnvCredentials } from '../config/environments';

export class LoginPage {
  constructor(private page: Page) {}

  async login() {
    const creds = getEnvCredentials();

  
    await this.page.goto('https://partnerhub.payarc.io/login');
    
    const email = this.page.getByTestId("loginUsername");
    const password = this.page.getByTestId("loginPassword");
    const loginButton = this.page.locator('button[type="submit"]');

    // 2. Fill fields and ensure the UI registers the keystrokes
    await email.fill(creds.username);
    await password.fill(creds.password);

    await expect(loginButton).toBeEnabled({ timeout: 10000 });

  await loginButton.click();

// Wait for dashboard redirect (adjust if needed)
  await this.page.waitForLoadState('networkidle');

  }
}