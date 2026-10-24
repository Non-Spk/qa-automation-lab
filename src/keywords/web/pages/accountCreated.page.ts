import { expect } from "@playwright/test";
import { webConfig } from "../../../resources/configs/web.config";
import { AccountCreatedLocators } from "../../../resources/locators/web/accountCreated.locator";

export class AccountCreatedPages extends AccountCreatedLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(webConfig.endpoints.accountCreated);
  }

  public async verifyAccountCreated(): Promise<void> {
    await expect(this.txtAccountCreated).toBeVisible();
  }

  public async clickContinue(): Promise<void> {
    await this.btnContinue.click();
  }
}
