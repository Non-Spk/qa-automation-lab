import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class AccountCreatedLocators extends BasePage {
  protected get txtAccountCreated(): Locator {
    return this.page.getByText('Account Created!');
  }

  protected get btnContinue(): Locator {
    return this.page.getByRole('link', { name: 'Continue' });
  }
}