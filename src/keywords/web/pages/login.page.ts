import { expect } from "../../../fixtures/web/base.fixture";
import { webConfig } from "../../../resources/configs/web.config";
import { LoginLocators } from "../../../resources/locators/web/login.locator";

export class LoginPages extends LoginLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(webConfig.endpoints.login);
  }

  public async enterEmailAddressLoginForm(emailAddress: string): Promise<void> {
    await this.txtEmailAddressLoginForm().fill(emailAddress);
  }

  public async enterPasswordLoginForm(password: string): Promise<void> {
    await this.txtPasswordLoginForm().fill(password);
  }

  public async clickLogin(): Promise<void> {
    await this.btnLogin().click();
  }

  public async enterEmailAddressSignUpForm(
    emailAddress: string,
  ): Promise<void> {
    await this.txtEmailAddressSignUpForm().fill(emailAddress);
  }

  public async enterNameSignUpForm(name: string): Promise<void> {
    await this.txtNameSignUpForm().fill(name);
  }

  public async clickSignUp(): Promise<void> {
    await this.btnSignUp().click();
  }

  public async verifyLoginErrorMessageIsAppearing(): Promise<void> {
    await expect(this.txtLoginErrorMessage()).toBeVisible();
  }
}
