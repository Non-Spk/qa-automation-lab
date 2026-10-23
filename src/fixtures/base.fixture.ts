
import { test as base } from "@playwright/test";
import { HomePages } from "../keywords/pages/home.page";
import { LoginPages } from "../keywords/pages/login.page";

type BaseFixtures = {
  homePage: HomePages;
  loginPage: LoginPages;
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
});

export { expect } from "@playwright/test";
