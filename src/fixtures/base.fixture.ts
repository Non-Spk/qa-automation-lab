
import { test as base } from "@playwright/test";
import { LoginPages } from "../keywords/pages/login.page";

type BaseFixtures = {
  loginPage: LoginPages;
};

export const test = base.extend<BaseFixtures>({

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPages(page);
    await use(loginPage);
  },
});

export { expect } from "@playwright/test";
