import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class LoginLocators extends BasePage {
  protected txtEmailAddress(): Locator {
    return this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
  }

  protected txtPassword(): Locator {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  protected btnLogin(): Locator {
    return this.page.getByRole('button', { name: 'Login' });
  }
}