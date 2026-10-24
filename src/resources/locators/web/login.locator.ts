import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../../keywords/web/pages/base.page";
import { I18n } from "../../../fixtures/web/i18n.fixture";

export class LoginLocators extends BasePage {
  constructor(page: Page, i18n: I18n) {
    super(page, i18n);
  }

  protected txtEmailAddressLoginForm(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: this.t.login.txtLoginForm })
      .getByPlaceholder(this.t.login.txtEmail);
  }

  protected txtPasswordLoginForm(): Locator {
    return this.page.getByRole("textbox", { name: this.t.login.txtPassword });
  }

  protected btnLogin(): Locator {
    return this.page.getByRole("button", { name: this.t.login.btnLogin });
  }

  protected txtEmailAddressSignUpForm(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: this.t.login.txtSignupForm })
      .getByPlaceholder(this.t.login.txtEmail);
  }

  protected txtNameSignUpForm(): Locator {
    return this.page.getByRole("textbox", { name: this.t.login.txtName });
  }

  protected btnSignUp(): Locator {
    return this.page.getByRole("button", { name: this.t.login.btnSignup });
  }

  protected txtLoginErrorMessage(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: this.t.login.txtLoginForm })
      .getByText(this.t.login.txtLoginErrorMessage);
  }
}
