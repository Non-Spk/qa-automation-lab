import { test } from "../fixtures/base.fixture";
import { accountData } from "../resources/data/account.data";

test.describe(
  "Authentication Feature Tests",
  { tag: ["@smoke", "@auth"] },
  () => {
    test(
      "Test Case 1: Register User",
      { tag: ["@TC001"] },
      async ({ authFeature }) => {
        await authFeature.createNewAccount(
          accountData.qa_tester_q1,
          accountData.qa_tester_q1.information!,
        );
        await authFeature.deleteAccount();
      },
    );

    test(
      "Test Case 2: Login User with correct email and password",
      { tag: ["@TC002"] },
      async ({ authFeature, homePage }) => {
        await authFeature.loginAccount(accountData.qa_tester_q2);
        await homePage.verifyLoggedInAs(accountData.qa_tester_q2.userName);
      },
    );

    test(
      "Test Case 3: Login User with incorrect email and password",
      { tag: ["@TC003"] },
      async ({ authFeature, loginPage }) => {
        await authFeature.loginAccount(accountData.qa_tester_q3);
        await loginPage.verifyLoginErrorMessageIsAppearing();
      },
    );
  },
);
