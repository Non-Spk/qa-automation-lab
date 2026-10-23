import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";
import { I18n } from "../../fixtures/i18n.fixture";

export class HomeLocators extends BasePage {
  constructor(page: Page, i18n: I18n) {
    super(page, i18n);
  }

  protected get btnSingUpLogin(): Locator {
    return this.page.getByRole("link", { name: this.t.home.btnSingUpLogin });
  }

  protected get txtLoggedInAs(): Locator {
    return this.page.getByText(this.t.home.txtLoggedInAs);
  }

  protected get btnDeleteAccount(): Locator {
    return this.page.getByRole("link", { name: this.t.home.btnDeleteAccount });
  }
}
