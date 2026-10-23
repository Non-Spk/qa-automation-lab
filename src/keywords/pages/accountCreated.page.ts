import { expect } from "@playwright/test";
import { config } from "../../resources/configs/env.config";
import { AccountCreatedLocators } from "../../resources/locators/accountCreated.locator";

export class AccountCreatedPages extends AccountCreatedLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(config.paths.accountCreated);
  }

  public async verifyAccountCreated(): Promise<void> {
    await expect(this.txtAccountCreated).toBeVisible();
  }

  public async clickContinue(): Promise<void> {
    await this.btnContinue.click();
  }
}
