import { expect } from "@playwright/test";
import { webConfig } from "../../../resources/configs/web.config";
import { DeleteAccountLocators } from "../../../resources/locators/web/deleteAccount.locator";

export class DeleteAccountPages extends DeleteAccountLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(webConfig.endpoints.deleteAccount);
  }

  public async verifyAccountDeleted(): Promise<void> {
    await expect(this.txtAccountDeleted).toBeVisible();
  }

  public async clickContinue(): Promise<void> {
    await this.btnContinue.click();
  }
}
