import { en } from "../translations/en";
import { th } from "../translations/th";
import type { TranslationType } from "../translations/type";

export const translations = {
  en,
  th,
} satisfies Record<string, TranslationType>;

export type Language = keyof typeof translations;

export const resolveLanguage = (value?: string): Language => {
  const normalizedValue = (
    value ??
    process.env.TEST_LOCALE ??
    "en"
  ).toLowerCase();

  return normalizedValue in translations ? (normalizedValue as Language) : "en";
};

export const getTranslations = (language: Language): TranslationType =>
  translations[language];
