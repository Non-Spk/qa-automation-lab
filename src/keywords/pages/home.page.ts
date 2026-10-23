import { expect } from "@playwright/test";
import { HomeLocators } from "../../resources/locators/home.locator";
import { config } from "../../resources/configs/env.config";

export class HomePages extends HomeLocators {
  public async navigateToHomePage(): Promise<void> {
    await this.navigate();
  }

  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL();
  }

  public async clickSignUpLogin(): Promise<void> {
    await this.btnSingUpLogin.click();
  }

  public async clickDeleteAccount(): Promise<void> {
    await this.btnDeleteAccount.click();
  }

  public async verifyLoggedInAs(userName: string): Promise<void> {
    await expect(this.txtLoggedInAs).toHaveText(`Logged in as ${userName}`);
  }
}