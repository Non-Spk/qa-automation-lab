
import { test as base } from "@playwright/test";
import { HomePages } from "../keywords/pages/home.page";
import { LoginPages } from "../keywords/pages/login.page";
import { LoginFeature } from "../keywords/features/login.features";
import { SignUpPages } from "../keywords/pages/signUp.page";

type BaseFixtures = {
  homePage: HomePages;
  loginPage: LoginPages;
  signUpPage: SignUpPages;
  loginFeature: LoginFeature;
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

  loginFeature: async ({ homePage, loginPage }, use) => {
    const loginFeature = new LoginFeature(homePage, loginPage);
    await use(loginFeature);
  }
});

export { expect } from "@playwright/test";
