import { test } from "../fixtures/base.fixture";
import { accountData } from "../resources/data/account.data";

test('Test Case 3: Login User with incorrect email and password',
  { tag: ['@smoke', '@TC003'] },
  async ({ loginFeature }) => {
    await loginFeature.login(accountData.qa_tester_q1);
  });