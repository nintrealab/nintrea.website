import * as projectInfo from './package.json';

export const defaultSEO = {
    lang: "en",
    title: "Nintrea Webiste",
    canonical: window.location.hostname + window.location.pathname,
    author: {
        image: `./assets/profile.png`,
        name: "Nintrea Webiste",
        url: window.location.hostname + window.location.pathname
    },
    description: projectInfo.default.description,
    icons: {
        ico :`./assets/favicon.ico`,
        i76x76 :`./assets/apple-touch-icon.png`,
        i32x32 :`./assets/favicon-32x32.png`,
        i16x16 :`./assets/favicon-16x16.png`,
    },
    banner: {
        cover : `./assets/home.webp`,
        type : "website",
        siteURL : "https://twitter.com/infoSophat",
    },
    manifest: `./assets/site.webmanifest`,
    feed: `./assets/feed.xml`,
    themeColor: "#ffffff"
}