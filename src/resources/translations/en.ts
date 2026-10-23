import { AccountCreatedTranslationEN } from "./accountCreated/en";
import { DeleteAccountTranslationEN } from "./deleteAccount/en";
import { HomeTranslationEN } from "./home/en";
import { LoginTranslationEN } from "./login/en";
import { SignUpTranslationEN } from "./signUp/en";
import { TranslationType } from "./type";

export const en: TranslationType = {
  home: HomeTranslationEN,
  login: LoginTranslationEN,
  signUp: SignUpTranslationEN,
  accountCreated: AccountCreatedTranslationEN,
  deleteAccount: DeleteAccountTranslationEN,
} as const;
