import { Locator } from "@playwright/test";
import { BasePage } from "../../keywords/pages/base.page";

export class SignUpLocators extends BasePage {
  protected chkMr(): Locator {
    return this.page.getByRole('radio', { name: 'Mr.' });
  }

  protected chkMrs(): Locator {
    return this.page.getByRole('radio', { name: 'Mrs.' });
  }

  protected txtPassword(): Locator {
    return this.page.getByRole('textbox', { name: 'Password *' })
  }

  protected ddlDays(): Locator {
    return this.page.locator('#days');
  }

  protected ddlMonths(): Locator {
    return this.page.locator('#months');
  }

  protected ddlYears(): Locator {
    return this.page.locator('#years');
  }

  protected chkNewsletter(): Locator {
    return this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
  }

  protected chkSpecialOffers(): Locator {
    return this.page.getByRole('checkbox', { name: 'Receive special offers from' });
  }

  protected txtFirstName(): Locator {
    return this.page.getByRole('textbox', { name: 'First name *' });
  }

  protected txtLastName(): Locator {
    return this.page.getByRole('textbox', { name: 'Last name *' });
  }

  protected txtCompany(): Locator {
    return this.page.getByRole('textbox', { name: 'Company', exact: true });
  }

  protected txtAddress1(): Locator {
    return this.page.getByRole('textbox', { name: 'Address * (Street address, P.' });
  }

  protected txtAddress2(): Locator {
    return this.page.getByRole('textbox', { name: 'Address 2' });
  }

  protected ddlCountry(): Locator {
    return this.page.getByLabel('Country *');
  }

  protected txtState(): Locator {
    return this.page.getByRole('textbox', { name: 'State *' });
  }

  protected txtCity(): Locator {
    return this.page.getByRole('textbox', { name: 'City * ZipCode *' });
  }

  protected txtZipCode(): Locator {
    return this.page.locator('#zipcode');
  }

  protected txtMobileNumber(): Locator {
    return this.page.getByRole('textbox', { name: 'Mobile Number *' });
  }

  protected btnCreateAccount(): Locator {
    return this.page.getByRole('button', { name: 'Create Account' });
  }
}