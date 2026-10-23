import { expect, Page } from "@playwright/test";
import { config } from "../../resources/configs/env.config";
import { I18n } from "../../fixtures/i18n.fixture";

export class BasePage {
  protected readonly page: Page;
  protected readonly i18n: I18n;

  constructor(page: Page, i18n: I18n) {
    this.page = page;
    this.i18n = i18n;
  }

  protected get t() {
    return this.i18n.t;
  }

  protected async navigate(path: string = "/"): Promise<void> {
    await this.page.goto(path);
  }

  protected async verifyURL(expectedURL: string = "/"): Promise<void> {
    const fullURL = new URL(expectedURL, config.baseURL).href;
    await expect(this.page).toHaveURL(fullURL);
  }
}
