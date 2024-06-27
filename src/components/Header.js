import React from "react";
import Container from "./Container.js";
import Logo from "../assets/logo.png";
import { defaultSEO } from "../configs/web.js";
import { useTranslation, Trans } from "react-i18next";
import { cn } from "./MergeClass.js";

export const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="sticky top-0 z-20 w-full py-3 mx-auto scroll-smooth backdrop-blur-sm dark:bg-white/5 bg-white/50">
            <Container className={'flex w-full items-center justify-between'}>
                <div>
                    <a href="/" className="pb-2 cursor-pointer" aria-label={defaultSEO.title}>
                        <img src={Logo} alt={`@` + t('name') + `-logo`} width={48} height={48} />
                    </a>
                </div>
                <nav>
                    <ul role="menu" className="flex items-center justify-between">

                        {t("menu", { returnObjects: true }).map((item, index) => {
                            return (
                                <li key={index} role="presentation">
                                    <a href={item.path} role="menuitem" className="px-2 py-1 transition-colors dark:text-white/70 dark:hover:text-white">{item.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="flex items-center gap-2">

                    <a href="https://github.com/nintrealabs" target="_blank" className="flex items-center gap-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 dark:text-white" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </a>
                    <button type="button" className={cn(i18n.language == "km" ? "hidden" : "")} onClick={() => changeLanguage("km")}>KH</button>
                    <button type="button" className={cn(i18n.language == "en" ? "hidden" : "")} onClick={() => changeLanguage("en")}>EN</button>
                </div>
            </Container>
        </div>
    );
}

export default Header;