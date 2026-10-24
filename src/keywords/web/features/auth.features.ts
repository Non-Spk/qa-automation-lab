import {
  AccountCredentials,
  AccountInformation,
} from "../../../resources/interfaces/web/account.interface";
import { AccountCreatedPages } from "../pages/accountCreated.page";
import { DeleteAccountPages } from "../pages/deleteAccount.page";
import { HomePages } from "../pages/home.page";
import { LoginPages } from "../pages/login.page";
import { SignUpPages } from "../pages/signUp.page";

export class AuthFeature {
  constructor(
    private readonly homePage: HomePages,
    private readonly loginPage: LoginPages,
    private readonly signUpPage: SignUpPages,
    private readonly accountCreatedPage: AccountCreatedPages,
    private readonly deleteAccountPage: DeleteAccountPages,
  ) {}

  public async loginAccount(account: AccountCredentials): Promise<void> {
    const { emailAddress, password } = account;
    await this.homePage.navigateToHomePage();
    await this.homePage.clickSignUpLogin();
    await this.loginPage.verifyURLIsAppearing();
    await this.loginPage.enterEmailAddressLoginForm(emailAddress);
    await this.loginPage.enterPasswordLoginForm(password);
    await this.loginPage.clickLogin();
  }

  public async createNewAccount(
    account: AccountCredentials,
    information: AccountInformation,
  ): Promise<void> {
    const { emailAddress, userName, password } = account;
    const {
      title,
      dateOfBirth,
      newsletter,
      specialOffers,
      firstName,
      lastName,
      company,
      address1,
      address2,
      country,
      state,
      city,
      zipCode,
      mobileNumber,
    } = information;
    await this.homePage.navigateToHomePage();
    await this.homePage.clickSignUpLogin();
    await this.loginPage.verifyURLIsAppearing();
    await this.loginPage.enterEmailAddressSignUpForm(emailAddress);
    await this.loginPage.enterNameSignUpForm(userName);
    await this.loginPage.clickSignUp();
    await this.signUpPage.verifyURLIsAppearing();
    switch (title) {
      case "mr":
        await this.signUpPage.selectTitleMr();
        break;
      case "mrs":
        await this.signUpPage.selectTitleMrs();
        break;
    }
    await this.signUpPage.enterPassword(password);
    await this.signUpPage.selectDays(dateOfBirth.getDate().toString());
    await this.signUpPage.selectMonths(
      dateOfBirth.toLocaleString("default", { month: "long" }),
    );
    await this.signUpPage.selectYears(dateOfBirth.getFullYear().toString());
    if (newsletter) {
      await this.signUpPage.checkNewsletter();
    }
    if (specialOffers) {
      await this.signUpPage.checkSpecialOffers();
    }
    await this.signUpPage.enterFirstName(firstName);
    await this.signUpPage.enterLastName(lastName);
    await this.signUpPage.enterCompany(company);
    await this.signUpPage.enterAddress1(address1);
    if (address2) {
      await this.signUpPage.enterAddress2(address2);
    }
    await this.signUpPage.selectCountry(country);
    await this.signUpPage.enterState(state);
    await this.signUpPage.enterCity(city);
    await this.signUpPage.enterZipCode(zipCode);
    await this.signUpPage.enterMobileNumber(mobileNumber);
    await this.signUpPage.clickCreateAccount();
    await this.accountCreatedPage.verifyURLIsAppearing();
    await this.accountCreatedPage.verifyAccountCreated();
    await this.accountCreatedPage.clickContinue();
    await this.homePage.verifyLoggedInAs(userName);
  }

  public async deleteAccount(): Promise<void> {
    await this.homePage.verifyURLIsAppearing();
    await this.homePage.clickDeleteAccount();
    await this.deleteAccountPage.verifyURLIsAppearing();
    await this.deleteAccountPage.verifyAccountDeleted();
    await this.deleteAccountPage.clickContinue();
  }
}
