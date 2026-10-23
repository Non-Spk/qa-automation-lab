import { AccountCredentials } from "../interfaces/account.interface";

interface AccountData {
  qa_tester_q1: AccountCredentials;
}

export const accountData: AccountData = {
  qa_tester_q1: {
    emailAddress: "qa.test.q1@example.com",
    userName: "qa_tester_q1",
    password: "Test@1234",
  },
} as const;