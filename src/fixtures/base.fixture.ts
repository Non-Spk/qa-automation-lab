
import { test as base } from "@playwright/test";
import { HomePages } from "../keywords/pages/home.page";
import { LoginPages } from "../keywords/pages/login.page";
import { SignUpPages } from "../keywords/pages/signUp.page";
import { AccountCreatedPages } from "../keywords/pages/accountCreated.page";
import { DeleteAccountPages } from "../keywords/pages/deleteAccount.page";
import { AuthFeature } from "../keywords/features/auth.features";

type BaseFixtures = {
  homePage: HomePages;
  loginPage: LoginPages;
  signUpPage: SignUpPages;
  accountCreatedPage: AccountCreatedPages;
  deleteAccountPage: DeleteAccountPages;
  authFeature: AuthFeature;
};

export const test = base.extend<BaseFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePages(page);
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPages(page);
    await use(loginPage);
  },

  signUpPage: async ({ page }, use) => {
    const signUpPage = new SignUpPages(page);
    await use(signUpPage);
  },

  accountCreatedPage: async ({ page }, use) => {
    const accountCreatedPage = new AccountCreatedPages(page);
    await use(accountCreatedPage);
  },

  deleteAccountPage: async ({ page }, use) => {
    const deleteAccountPage = new DeleteAccountPages(page);
    await use(deleteAccountPage);
  },

  authFeature: async ({ homePage, loginPage, signUpPage, accountCreatedPage, deleteAccountPage }, use) => {
    const authFeature = new AuthFeature(homePage, loginPage, signUpPage, accountCreatedPage, deleteAccountPage);
    await use(authFeature);
  },
});

export { expect } from "@playwright/test";
