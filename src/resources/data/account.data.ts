import { AccountCredentials, AccountInformation } from "../interfaces/account.interface";

interface AccountData extends AccountCredentials {
  information?: AccountInformation;
}

interface AccountDataCollection {
  [key: string]: AccountData;
}


export const accountData: AccountDataCollection = {
  qa_tester_q1: {
    emailAddress: "qa.test.q1@example.com",
    userName: "qa_tester_q1",
    password: "Test@1234",
    information: {
      title: "mr",
      dateOfBirth: new Date("2000-01-01"),
      newsletter: true,
      specialOffers: true,
      firstName: "Automation",
      lastName: "Tester",
      company: "QA Automation Co., Ltd.",
      address1: "99/123 Sukhumvit Road",
      address2: "Building A, Floor 5",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      zipCode: "90001",
      mobileNumber: "0812345678",
    },
  },

  qa_tester_q2: {
    emailAddress: "qa.test.q2@example.com",
    userName: "qa_tester_q2",
    password: "Test@1234",
    information: {
      title: "mrs",
      dateOfBirth: new Date("2000-01-01"),
      newsletter: true,
      specialOffers: true,
      firstName: "Automation",
      lastName: "Tester",
      company: "QA Automation Co., Ltd.",
      address1: "99/123 Sukhumvit Road",
      address2: "Building A, Floor 5",
      country: "United States",
      state: "California",
      city: "Los Angeles",
      zipCode: "90001",
      mobileNumber: "0812345678",
    },
  },
} as const;
