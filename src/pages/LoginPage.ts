import { Page, expect } from '@playwright/test';
import { getEnvCredentials } from '../config/environments';

export class LoginPage {
  constructor(private page: Page) {}

  async login() {
    const creds = getEnvCredentials();

    await this.page.goto('https://partnerhub-staging.payarc.com/login');
    const email = this.page.getByTestId("loginUsername")
    const password = this.page.getByTestId("loginPassword")
    const loginButton = this.page.getByTestId("loginButton")

    await email.fill(creds.username);
    await password.fill(creds.password);

    await expect(loginButton).toBeEnabled({ timeout: 10000 })

    await loginButton.click();
    
  }
}