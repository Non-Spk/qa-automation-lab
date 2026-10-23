import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";
import { I18n } from "../../fixtures/i18n.fixture";

export class DeleteAccountLocators extends BasePage {
  constructor(page: Page, i18n: I18n) {
    super(page, i18n);
  }

  protected get txtAccountDeleted(): Locator {
    return this.page.getByText(this.t.deleteAccount.txtAccountDeleted);
  }

  protected get btnContinue(): Locator {
    return this.page.getByRole("link", {
      name: this.t.deleteAccount.btnContinue,
    });
  }
}
