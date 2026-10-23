import { expect } from "@playwright/test";
import { config } from "../../resources/configs/env.config";
import { DeleteAccountLocators } from "../../resources/locators/deleteAccount.locator";

export class DeleteAccountPages extends DeleteAccountLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(config.paths.deleteAccount);
  }

  public async verifyAccountDeleted(): Promise<void> {
    await expect(this.txtAccountDeleted).toBeVisible();
  }

  public async clickContinue(): Promise<void> {
    await this.btnContinue.click();
  }
}
