import { expect, Page } from "@playwright/test";
import { config } from "../../resources/configs/env.config";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async navigate(path: string = "/"): Promise<void> {
    await this.page.goto(path);
  }

  protected async verifyURL(expectedURL: string = "/"): Promise<void> {
    const fullURL = new URL(expectedURL, config.baseURL).href;
    await expect(this.page).toHaveURL(fullURL);
  }

}