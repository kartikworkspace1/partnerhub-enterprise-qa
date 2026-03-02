import { Page, expect } from '@playwright/test';

export class MerchantPage {
  constructor(private page: Page) {}

  async createMerchant(name: string) {
    await this.page.click('text=Add Merchant');
    await this.page.fill('#merchantName', name);
    await this.page.click('text=Save');
  }

  async verifyMerchantCreated(name: string) {
    await expect(this.page.locator(`text=${name}`)).toBeVisible();
  }
}