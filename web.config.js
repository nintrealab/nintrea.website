import * as projectInfo from './package.json';

import i32x32 from "./src/assets/favicon-32x32.png";
import i16x16 from "./src/assets/favicon-16x16.png";
import i512x512 from "./src/assets/android-chrome-512x512.png";
import i192x192 from "./src/assets/android-chrome-192x192.png";
import iAppleTouch from "./src/assets/apple-touch-icon.png";
import screenShot1 from "./src/assets/screenshot-1.png";
import Ico from "./src/assets/favicon.ico"

export const defaultSEO = {
    lang: "en",
    title: "Nintrea Website",
    short_name: "Nintrea",
    canonical: window.location.hostname + window.location.pathname,
    author: {
        image: `/images/profile.png`,
        name: "Nintrea Website",
        url: window.location.hostname + window.location.pathname
    },
    description: projectInfo.default.description,
    icons: {
        ico : Ico,
        i76x76 : iAppleTouch,
        i32x32 : i32x32,
        i16x16 : i16x16,
    },
    banner: {
        cover : screenShot1,
        type : "website",
        siteURL : "https://twitter.com/infoSophat",
    },
    manifest: `/site.webmanifest`,
    feed: `/feed.xml`,
    themeColor: "#ffffff"
}