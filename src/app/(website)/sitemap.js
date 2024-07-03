import { defaultMeta } from "@/data/meta"
import fs from 'fs';

export default function sitemap() {

    const mainPage    = [];
    const pagesDir  = './src/app/(website)';
    const pages     = fs.readdirSync(pagesDir);

    pages.forEach((page) => {
        const route = page.replaceAll(/\(home\)/g, '');
        if (route !== "sitemap.js")
        {
            mainPage.push({
                url: `${defaultMeta.canonical}/${route}`,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.7,
            });
        }
    });
    return mainPage
}