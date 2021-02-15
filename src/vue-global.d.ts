import { App, ComponentCustomProperties, Ref } from "vue";

// Data structure
export declare type Dictionary<T> = { [key: string]: T };
export declare type ClassList = String | Array<string | Dictionary<Boolean>> | Dictionary<Boolean>

// * Plugins * //
// I18n
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
// A11y
export declare interface A11y {
    private keyboardMode: Ref<Boolean>;

    constructor(): void;

    private onKeyDown(event: KeyboardEvent): void;
    private onMouseMode(): void;

    isKeyboardMode(): Boolean;

    install(vue: App): void;
}

// Inject plugins
declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $i18n: I18n;
        $a11y: A11y;
    }
}
