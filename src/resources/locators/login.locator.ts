import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class LoginLocators extends BasePage {
  protected txtEmailAddressLoginForm(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
  }

  protected txtPasswordLoginForm(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }

  protected btnLogin(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }

  protected txtEmailAddressSignUpForm(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: "SignUp" })
      .getByPlaceholder("Email Address");
  }

  protected txtNameSignUpForm(): Locator {
    return this.page.getByRole("textbox", { name: "Name" });
  }

  protected btnSignUp(): Locator {
    return this.page.getByRole("button", { name: "SignUp" });
  }
}
