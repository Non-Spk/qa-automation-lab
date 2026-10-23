import {
  type Language,
  resolveLanguage,
  translations,
} from "../resources/configs/i18n.config";

export class I18n {
  private _lang: Language;
  private readonly defaultLanguage: Language;
  private readonly translations = translations;

  constructor(initialLanguage: Language = resolveLanguage()) {
    this._lang = initialLanguage;
    this.defaultLanguage = initialLanguage;
  }

  // Get current language
  get lang(): Language {
    return this._lang;
  }

  // Get translations for current language
  get t() {
    return this.translations[this._lang];
  }

  // Switch language
  switchLang(language: string): void {
    this._lang = resolveLanguage(language);
  }

  // Reset language to initial language
  resetLang(): void {
    this._lang = this.defaultLanguage;
  }
}

export const i18nFixture = new I18n();
