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

   const waitForLoginRequest = this.page.waitForRequest(req =>
      req.url().includes('/v1/agent-hub/login') && req.method() === 'POST'
    );

    const waitForLoginResponse = this.page.waitForResponse(res =>
      res.url().includes('/v1/agent-hub/login') && res.status() === 200
    );

    await this.page.getByTestId('loginButton').click();

    // Wait for both to resolve
    const [request, response] = await Promise.all([
      waitForLoginRequest,
      waitForLoginResponse,
    ]);
  }
}
