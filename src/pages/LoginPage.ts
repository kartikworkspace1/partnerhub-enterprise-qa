import { Page } from '@playwright/test';
import { getEnvCredentials } from '../config/environments';

export class LoginPage {
  constructor(private page: Page) {}

  async login() {
    const creds = getEnvCredentials();
    await this.page.goto('/');
    await this.page.fill('#email', creds.username);
    await this.page.fill('#password', creds.password);
    await this.page.click('button[type="submit"]');
  }
}