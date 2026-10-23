import { AccountCreatedTranslationTH } from "./accountCreated/th";
import { DeleteAccountTranslationTH } from "./deleteAccount/th";
import { HomeTranslationTH } from "./home/th";
import { LoginTranslationTH } from "./login/th";
import { SignUpTranslationTH } from "./signUp/th";
import { TranslationType } from "./type";

export const th: TranslationType = {
  home: HomeTranslationTH,
  login: LoginTranslationTH,
  signUp: SignUpTranslationTH,
  accountCreated: AccountCreatedTranslationTH,
  deleteAccount: DeleteAccountTranslationTH,
} as const;
