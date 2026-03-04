import { Page, expect } from '@playwright/test';
import { getEnvCredentials } from '../config/environments';

export class LoginPage {
  constructor(private page: Page) {}

  async login() {
    const creds = getEnvCredentials();

    // 1. Check if credentials actually exist (common CI failure)
    if (!creds.username || !creds.password) {
      throw new Error("Credentials not found! Check your GitHub Action Secrets.");
    }

    await this.page.goto('https://partnerhub.payarc.io/login');
    
    const email = this.page.getByTestId("loginUsername");
    const password = this.page.getByTestId("loginPassword");
    const loginButton = this.page.getByTestId("loginButton");

    // 2. Fill fields and ensure the UI registers the keystrokes
    await email.fill(creds.username);
    await password.fill(creds.password);

    // 3. Explicitly wait for the button to be enabled before clicking
    // This solves the "element is not enabled" error in your log
    await expect(loginButton).toBeEnabled({ timeout: 50000 });

    await loginButton.click();
  }
}