import { AccountCredentials } from "../../resources/interfaces/account.interface";
import { HomePages } from "../pages/home.page";
import { LoginPages } from "../pages/login.page";

export class LoginFeature {
  constructor(private readonly homePage: HomePages, private readonly loginPage: LoginPages) { }
  public async login(account: AccountCredentials): Promise<void> {
    const { emailAddress, userName, password } = account;
    await this.homePage.navigate();
    await this.homePage.clickSignUpLogin();
    await this.loginPage.enterEmailAddress(emailAddress);
    await this.loginPage.enterPassword(password);
    await this.loginPage.clickLogin();
    await this.homePage.verifyLoggedInAs(userName);
  }
}