import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../../keywords/web/pages/base.page";
import { I18n } from "../../../fixtures/web/i18n.fixture";

export class AccountCreatedLocators extends BasePage {
  constructor(page: Page, i18n: I18n) {
    super(page, i18n);
  }

  protected get txtAccountCreated(): Locator {
    return this.page.getByText(this.t.accountCreated.txtAccountCreated);
  }

  protected get btnContinue(): Locator {
    return this.page.getByRole("link", {
      name: this.t.accountCreated.btnContinue,
    });
  }
}
