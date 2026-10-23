import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class DeleteAccountLocators extends BasePage {
  protected get txtAccountDeleted(): Locator {
    return this.page.getByText('Account Deleted!');
  }

  protected get btnContinue(): Locator {
    return this.page.getByRole('link', { name: 'Continue' });
  }
}