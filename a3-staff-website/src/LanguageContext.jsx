import React, { createContext, useContext, useState, useMemo } from "react";
import { en } from "./i18n/en";
import { ko } from "./i18n/ko";

const translations = { en, ko };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState("en");

    const value = useMemo(() => {
        const t = (path) => {
            return path.split(".").reduce(
                (obj, key) => (obj ? obj[key] : undefined),
                translations[lang]
            ) ?? path;
        };
        return { lang, setLang, t };
    }, [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
