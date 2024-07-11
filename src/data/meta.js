import { info } from "./info";

export const defaultMeta = {
    title: info.name,
    description: info.description,
    applicationName: info.name,
    canonical: info.url,
    metadataBase: info.url,
    authors: [
        { name: "LEAT Sophat", url: "https://leatsophat.me" },
        { name: "HOL Bundit", url: "https://bundit.nintrea.website" },
        { name: "CHHEM Sithuch", url: "https://github.com/sithuch" },
        { name: "MEAN Navy", url: "https://github.com/vyniivaa-dev" },
    ],
    generator: info.name,
    keywords: ["nintrea", "nintrea website", "nintrea shared", "nintrea elibary"],
    referrer: "origin",
    creator: "Nintrea Team",
    publisher: "Vercel, Netlify",
    // robots: {
    //     index: true,
    //     follow: true
    // },
    icons: info.logo,
    // manifest: "/manifest.json",
    // favicon: "/favicon.ico",
    openGraph: {
        type: "website",
        url: info.url,
        title: info.name,
        description: info.description,
        siteName: info.name,
        images: [{
            url: info.logo,
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: info.url,
        creator: "@infoNintrea",
        "images": info.logo
    },
    // verification:  {
    //     verification:
    //     {
    //         google: "1234567890",
    //         yandex: "1234567890",
    //         "me": "1234567890"
    //     }
    // }
};

export const viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
        { media: "(prefers-color-scheme: light)", color: "#ffffff" }
    ],
    viewport: {
        width: "device-width", initialScale: 1
    },
};