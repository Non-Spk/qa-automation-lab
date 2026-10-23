import { config } from "../../resources/configs/env.config";
import { SignUpLocators } from "../../resources/locators/signUp.locator";

export class SignUpPages extends SignUpLocators {
  public async verifyURLIsAppearing(): Promise<void> {
    await this.verifyURL(config.paths.signUp);
  }
  public async selectTitleMr(): Promise<void> {
    await this.chkMr().check();
  }

  public async selectTitleMrs(): Promise<void> {
    await this.chkMrs().check();
  }

  public async enterPassword(password: string): Promise<void> {
    await this.txtPassword().fill(password);
  }

  public async selectDays(day: string): Promise<void> {
    await this.ddlDays().selectOption(day);
  }

  public async selectMonths(month: string): Promise<void> {
    await this.ddlMonths().selectOption(month);
  }

  public async selectYears(year: string): Promise<void> {
    await this.ddlYears().selectOption(year);
  }

  public async checkNewsletter(): Promise<void> {
    await this.chkNewsletter().check();
  }

  public async checkSpecialOffers(): Promise<void> {
    await this.chkSpecialOffers().check();
  }

  public async enterFirstName(firstName: string): Promise<void> {
    await this.txtFirstName().fill(firstName);
  }

  public async enterLastName(lastName: string): Promise<void> {
    await this.txtLastName().fill(lastName);
  }

  public async enterCompany(company: string): Promise<void> {
    await this.txtCompany().fill(company);
  }

  public async enterAddress1(address1: string): Promise<void> {
    await this.txtAddress1().fill(address1);
  }

  public async enterAddress2(address2: string): Promise<void> {
    await this.txtAddress2().fill(address2);
  }

  public async selectCountry(country: string): Promise<void> {
    await this.ddlCountry().selectOption(country);
  }

  public async enterState(state: string): Promise<void> {
    await this.txtState().fill(state);
  }

  public async enterCity(city: string): Promise<void> {
    await this.txtCity().fill(city);
  }

  public async enterZipCode(zipcode: string): Promise<void> {
    await this.txtZipCode().fill(zipcode);
  }

  public async enterMobileNumber(mobileNumber: string): Promise<void> {
    await this.txtMobileNumber().fill(mobileNumber);
  }

  public async clickCreateAccount(): Promise<void> {
    await this.btnCreateAccount().click();
  }
}
