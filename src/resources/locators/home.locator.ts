import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class HomeLocators extends BasePage {
  protected get btnSingUpLogin(): Locator {
    return this.page.getByRole('link', { name: 'SignUp / Login' });
  }

  protected get txtLoggedInAs(): Locator {
    return this.page.getByText('Logged in as');
  }

  protected get btnDeleteAccount(): Locator {
    return this.page.getByRole('link', { name: 'Delete Account' });
  }
}