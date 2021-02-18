export declare interface I18n {
    private locale: Ref<string>;
    private collection: LanguageCollection;
    private urlParamName: string | null;

    private languageList: string[];

    constructor(collection: LanguageCollection, urlParamName: string | null): void;

    setLocale(locale: string): boolean;
    getLocale(): string;
    getLanguageList(): string[];

    t(key: string): string;
    path(to: string | any): string | any;

    install(vue: App): void;
}

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $i18n: I18n;
    }
}
