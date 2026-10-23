export interface TranslationType {
  home: HomeTranslationType;
  login: LoginTranslationType;
  signUp: SignUpTranslationType;
  accountCreated: AccountCreatedTranslationType;
  deleteAccount: DeleteAccountTranslationType;
}

interface HomeTranslationType {
  btnSingUpLogin: string;
  txtLoggedInAs: string;
  btnDeleteAccount: string;
}

interface LoginTranslationType {
  txtLoginForm: string;
  txtSignupForm: string;
  txtEmail: string;
  txtPassword: string;
  txtName: string;
  btnLogin: string;
  btnSignup: string;
  txtLoginErrorMessage: string;
}

interface SignUpTranslationType {
  chkMr: string;
  chkMrs: string;
  txtPassword: string;
  chkNewsletter: string;
  chkSpecialOffers: string;
  txtFirstName: string;
  txtLastName: string;
  txtCompany: string;
  txtAddress1: string;
  txtAddress2: string;
  ddlCountry: string;
  txtState: string;
  txtCity: string;
  txtMobileNumber: string;
  btnCreateAccount: string;
}

interface AccountCreatedTranslationType {
  txtAccountCreated: string;
  btnContinue: string;
}

interface DeleteAccountTranslationType {
  txtAccountDeleted: string;
  btnContinue: string;
}
