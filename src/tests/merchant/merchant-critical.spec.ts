import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { MerchantPage } from '../../pages/MerchantPage';

test('@smoke @merchant Create merchant critical flow', async ({ page }) => {
  const login = new LoginPage(page);
  const merchant = new MerchantPage(page);

  await login.login();
  await merchant.createMerchant('QA Automation Merchant');
  await merchant.verifyMerchantCreated('QA Automation Merchant');
});