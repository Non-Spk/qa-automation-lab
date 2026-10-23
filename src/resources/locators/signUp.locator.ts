import { Locator, Page } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";
import { I18n } from "../../fixtures/i18n.fixture";

export class SignUpLocators extends BasePage {
  constructor(page: Page, i18n: I18n) {
    super(page, i18n);
  }

  protected chkMr(): Locator {
    return this.page.getByRole("radio", { name: this.t.signUp.chkMr });
  }

  protected chkMrs(): Locator {
    return this.page.getByRole("radio", { name: this.t.signUp.chkMrs });
  }

  protected txtPassword(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtPassword });
  }

  protected ddlDays(): Locator {
    return this.page.locator("#days");
  }

  protected ddlMonths(): Locator {
    return this.page.locator("#months");
  }

  protected ddlYears(): Locator {
    return this.page.locator("#years");
  }

  protected chkNewsletter(): Locator {
    return this.page.getByRole("checkbox", {
      name: this.t.signUp.chkNewsletter,
    });
  }

  protected chkSpecialOffers(): Locator {
    return this.page.getByRole("checkbox", {
      name: this.t.signUp.chkSpecialOffers,
    });
  }

  protected txtFirstName(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtFirstName });
  }

  protected txtLastName(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtLastName });
  }

  protected txtCompany(): Locator {
    return this.page.getByRole("textbox", {
      name: this.t.signUp.txtCompany,
      exact: true,
    });
  }

  protected txtAddress1(): Locator {
    return this.page.getByRole("textbox", {
      name: this.t.signUp.txtAddress1,
    });
  }

  protected txtAddress2(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtAddress2 });
  }

  protected ddlCountry(): Locator {
    return this.page.getByLabel(this.t.signUp.ddlCountry);
  }

  protected txtState(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtState });
  }

  protected txtCity(): Locator {
    return this.page.getByRole("textbox", { name: this.t.signUp.txtCity });
  }

  protected txtZipCode(): Locator {
    return this.page.locator("#zipcode");
  }

  protected txtMobileNumber(): Locator {
    return this.page.getByRole("textbox", {
      name: this.t.signUp.txtMobileNumber,
    });
  }

  protected btnCreateAccount(): Locator {
    return this.page.getByRole("button", {
      name: this.t.signUp.btnCreateAccount,
    });
  }
}
