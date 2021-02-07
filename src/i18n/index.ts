import I18n from "@/plugins/i18n";
// Languages
import EN_US from "./lang/en-us";
import KO_KR from "./lang/ko";

const i18n = new I18n({
    "en-us": EN_US,
    "ko": KO_KR
});

// i18n.setLocale(window.navigator.language);

export default i18n;
