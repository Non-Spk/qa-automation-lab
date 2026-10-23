import { test } from "../fixtures/base.fixture";
import { accountData } from "../resources/data/account.data";

test('Test Case 1: Register User',
  { tag: ['@smoke', '@TC001'] },
  async ({ authFeature }) => {
    await authFeature.createNewAccount(accountData.qa_tester_q2, accountData.qa_tester_q2.information!);
    await authFeature.deleteAccount();
  });

test('Test Case 3: Login User with incorrect email and password',
  { tag: ['@smoke', '@TC003'] },
  async ({ authFeature }) => {
    await authFeature.loginAccount(accountData.qa_tester_q1);
  });