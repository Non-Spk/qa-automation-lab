export const webConfig = {
  baseURL: "https://www.automationexercise.com",

  endpoints: {
    login: "/login",
    signUp: "/signup",
    accountCreated: "/account_created",
    deleteAccount: "/delete_account",
  },
} as const;
