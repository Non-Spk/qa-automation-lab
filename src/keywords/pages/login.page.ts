import { LoginLocators } from "../../resources/locators/login.locator";

export class LoginPages extends LoginLocators {
  public async enterEmailAddress(emailAddress: string): Promise<void> {
    await this.txtEmailAddress().fill(emailAddress);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.txtPassword().fill(password);
  }

  public async clickLogin(): Promise<void> {
    await this.btnLogin().click();
  }
}
