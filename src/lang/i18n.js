import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { menu } from "../data/menu.js";

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: {
            translations: {
                name: "Nintrea Website",
                description: "Compiled with various documents to support the study of students or those who like to research documents on the Internet.",
                title: "Sharing knowledge and experience",
                search: "Search",
                learnMore: "Learn more",
                buttons: {
                },
                menu: menu.en
            },
        },
        km: {
            translations: {
                name: "គេហទំព័រ និទ្រា",
                description: "ប្រមូលផ្ដុំទៅដោយឯកសារផ្សេងៗជាជំនួយដល់ការសិក្សា របស់សិស្សានុសិស្ស ឬ អ្នកចូលចិ្តស្រាវជ្រាវឯកសារតាមប្រព័ន្ធ Internet។",
                title: "ចែករំលែកចំណេះដឹង និងបទពិសោធន៍",
                search: "ស្វែងរក",
                learnMore: "ស្វែងយល់បន្ថែម",
                buttons: {
                },
                menu: menu.km
            },
        },
    },
    fallbackLng: "en",
    // debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        format(value, format, lng) {
            if (format === "bold") return value?.toString()?.bold();
            return value;
        },
    },
});

export default i18n;
