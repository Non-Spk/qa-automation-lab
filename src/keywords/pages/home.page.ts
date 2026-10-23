import { expect } from "@playwright/test";
import { HomeLocators } from "../../resources/locators/home.locator";

export class HomePages extends HomeLocators {
  public async clickSignUpLogin(): Promise<void> {
    await this.btnSingUpLogin.click();
  }

  public async verifyLoggedInAs(userName: string): Promise<void> {
    await expect(this.txtLoggedInAs).toHaveText(`Logged in as ${userName}`);
  }
}