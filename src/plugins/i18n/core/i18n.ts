import { Dictionary } from "@/vue-global";
import { App, ref } from "vue";

type LanguageCollection = { [lang: string]: Dictionary<string> };

export default class I18n {
    private locale = ref("en-us");
    private collection: LanguageCollection;
    private urlParamName: string | null = null;

    private languageList: string[];

    constructor(collection: LanguageCollection, urlParamName: string | null = null) {
        this.collection = collection;
        this.languageList = Object.keys(this.collection);
        this.urlParamName = urlParamName;
    }

    setLocale(locale: string): Boolean {
        let success = true;

        if (this.languageList.includes(locale)) {
            this.locale.value = locale;
        } else {
            if (this.languageList.length) this.locale.value = this.languageList[0];
            else this.locale.value = "en-us";
            success = false;
            // Error result
            console.log(
                `%c[!] Locale "${locale}" is not supported`,
                "color: #c26c6b;"
            );
        }
        document.documentElement.setAttribute("lang", this.locale.value);

        return success;
    }
    getLocale(): string {
        return this.locale.value;
    }
    getLanguageList(): string[] {
        return this.languageList;
    }

    t(key: string, insertList: Dictionary<string | string[]> = {}): string {
        if (this.collection[this.locale.value][key]) {
            // Get string from collection
            let origin = this.collection[this.locale.value][key];

            // Replace format string
            for (let key in insertList) {
                let tmp = "";
                let pattern = new RegExp(`%${key}`, "g");
                let match: RegExpExecArray | null;
                let lastIndex = 0;
                let insertIndex = 0;

                while ((match = pattern.exec(origin)) !== null) {
                    // Format escape
                    if (origin[match.index - 1] === "\\") {
                        tmp += origin.slice(lastIndex, match.index - 1) + `%${key}`;
                    } else {
                        tmp += origin.slice(lastIndex, match.index);
                        if (Array.isArray(insertList[key])) {
                            tmp += insertList[key][insertIndex++] || `%${key}`;
                        } else tmp += insertList[key];
                    }
                    lastIndex = pattern.lastIndex;
                }
                origin = tmp + origin.slice(lastIndex);
            };

            return origin;
        }
        // Error result
        console.groupCollapsed(
            `%c[!] Translate string "${key}" is not found`,
            "color: #c26c6b;"
        );
        console.log(
            `%cLang : %c${this.locale.value}`,
            "color: #7f848e;",
            "color: inherit;"
        );
        console.log(
            `%c Key : %c${key}`,
            "color: #7f848e;",
            "color: inherit;"
        );
        console.groupEnd();
        return key;
    }
    path(to: string | any): string | any {
        if (typeof to === "string") {
            return `/${this.getLocale()}/${to.replace(/^\//, "")}`;
        } else if (this.urlParamName) {
            if (to.params) to.params[this.urlParamName] = this.getLocale();
            else to.params = { [this.urlParamName]: this.getLocale() };
        }
        return to;
    }

    install(vue: App) {
        vue.config.globalProperties.$i18n = this;
    }
}
