import I18n from "./core/i18n";
// Languages
import EN_US from "./lang/en-us";
import KO from "./lang/ko";

const i18n = new I18n({
    "en-us": EN_US,
    "ko": KO
}, "lang");

export default i18n;
