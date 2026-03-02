import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('@smoke User can login successfully', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login();
});