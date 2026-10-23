
import { test as base } from "@playwright/test";
import { HomePages } from "../keywords/pages/home.page";

type BaseFixtures = {
  homePage: HomePages;
};

export const test = base.extend<BaseFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePages(page);
    await use(homePage);
  },
});

export { expect } from "@playwright/test";
