import { defaultMeta } from "@/data/meta"

export default async function sitemap()
{
    const response  = await fetch('https://dummyjson.com/products?limit=50');
    const data      = await response.json();
    const mainPage  = [];

    data.products.forEach((page) => {
        const title = page.title.replaceAll(/\s+/g, '-')
        const route = title.toLowerCase();
        mainPage.push({
            url: `${defaultMeta.canonical}/blogs/${route}`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.7,
        });
    });
    return mainPage
}