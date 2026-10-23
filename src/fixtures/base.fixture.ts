import { test as base } from "@playwright/test";
import { HomePages } from "../keywords/pages/home.page";
import { LoginPages } from "../keywords/pages/login.page";
import { SignUpPages } from "../keywords/pages/signUp.page";
import { AccountCreatedPages } from "../keywords/pages/accountCreated.page";
import { DeleteAccountPages } from "../keywords/pages/deleteAccount.page";
import { AuthFeature } from "../keywords/features/auth.features";
import { I18n } from "./i18n.fixture";

type BaseFixtures = {
  i18n: I18n;
  homePage: HomePages;
  loginPage: LoginPages;
  signUpPage: SignUpPages;
  accountCreatedPage: AccountCreatedPages;
  deleteAccountPage: DeleteAccountPages;
  authFeature: AuthFeature;
};

export const test = base.extend<BaseFixtures>({
  // eslint-disable-next-line no-empty-pattern
  i18n: async ({}, use) => {
    await use(new I18n());
  },

  homePage: async ({ page, i18n }, use) => {
    const homePage = new HomePages(page, i18n);
    await use(homePage);
  },

  loginPage: async ({ page, i18n }, use) => {
    const loginPage = new LoginPages(page, i18n);
    await use(loginPage);
  },

  signUpPage: async ({ page, i18n }, use) => {
    const signUpPage = new SignUpPages(page, i18n);
    await use(signUpPage);
  },

  accountCreatedPage: async ({ page, i18n }, use) => {
    const accountCreatedPage = new AccountCreatedPages(page, i18n);
    await use(accountCreatedPage);
  },

  deleteAccountPage: async ({ page, i18n }, use) => {
    const deleteAccountPage = new DeleteAccountPages(page, i18n);
    await use(deleteAccountPage);
  },

  authFeature: async (
    { homePage, loginPage, signUpPage, accountCreatedPage, deleteAccountPage },
    use,
  ) => {
    const authFeature = new AuthFeature(
      homePage,
      loginPage,
      signUpPage,
      accountCreatedPage,
      deleteAccountPage,
    );
    await use(authFeature);
  },
});

export { expect } from "@playwright/test";
