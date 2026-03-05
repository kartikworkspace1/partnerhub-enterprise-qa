import { Page, expect } from '@playwright/test';
import { getEnvCredentials } from '../config/environments';

export class LoginPage {
  constructor(private page: Page) {}

  async login() {
    const creds = getEnvCredentials();

    // 1. Navigate to the login page
    await this.page.goto('/login');
    
    const email = this.page.getByTestId("loginUsername");
    const password = this.page.getByTestId("loginPassword");
    const loginButton = this.page.locator('button[type="submit"]');

    // 2. Fill fields and ensure the UI registers the keystrokes
    await email.fill(creds.username);
    await password.fill(creds.password);

   // 3. Wait for the login button to be enabled before clicking
    await expect(loginButton).toBeEnabled({ timeout: 10000 });

    //4. Click the login button
    await loginButton.click();
    
  }
}
