import React from "react"
import { defaultSEO } from "../../web.config.js";
import { createPortal } from "react-dom";

export class SEO extends React.Component {
    constructor(props) {
        super(props);
        this.header = {
            lang: props.lang || defaultSEO.lang,
            title: props.title || defaultSEO.title,
            canonical: props.canonical || defaultSEO.canonical,
            author: {
                image: props.author?.image || defaultSEO.author.image,
                name: props.author?.name || defaultSEO.author.name,
                url: props.author?.url || defaultSEO.author.url,
            },
            description: props.description || defaultSEO.description,
            icons: {
                ico: props.icons?.ico || defaultSEO.icons.ico,
                i76x76: props.icons?.i76x76 || defaultSEO.icons.i76x76,
                i32x32: props.icons?.i32x32 || defaultSEO.icons.i32x32,
                i16x16: props.icons?.i16x16 || defaultSEO.icons.i16x16,
            },
            banner: {
                cover: props.banner?.cover || defaultSEO.banner.cover,
                type: props.banner?.type || defaultSEO.banner.type,
                siteURL: props.banner?.siteURL || defaultSEO.banner.siteURL,
            },
            manifest: props.manifest || defaultSEO.manifest,
            feed: props.feed || defaultSEO.feed,
            themeColor: props.themeColor || defaultSEO.themeColor,
        };
    }

    render() {
        return createPortal(
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta name="google-site-verification" content="Q0p9T58Q3qt7sLl5v3H_qJqokTE4bdFH6t9o-kqagHk" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-74G58FWRVF"></script>
                <script>
                    {`window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-74G58FWRVF');`}
                </script>
                <title>{this.header?.title}</title>
                <meta property="og:title" content={this.header?.title} />
                <meta name="twitter:title" content={this.header?.title} />
                <meta property="og:site_name" content={this.header?.title} />
                <meta name="robots" content="follow, index" />
                <meta name="description" content={this.header?.description} />
                <meta property="og:description" content={this.header?.description} />
                <meta name="twitter:description" content={this.header?.description} />
                <meta name="author" content={this.header?.author} />
                <link rel="canonical" href={this.header?.canonical} />
                <meta property="og:url" content={this.header?.canonical} />
                <meta property="og:type" content={this.header?.banner.type} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="https://twitter.com/infoSophat" />
                <meta property="og:image" content={this.header?.banner.cover} />
                <meta name="twitter:image" content={this.header?.banner.cover} />
                <link rel="apple-touch-icon" sizes="76x76" href={this.header?.icons.i76x76} />
                <link rel="icon" type="image/png" sizes="32x32" href={this.header?.icons.i32x32} />
                <link rel="icon" type="image/png" sizes="16x16" href={this.header?.icons.i16x16} />
                <link rel="alternate" type="application/rss+xml" title={`${this.header?.icons.title} Feed`} href={this.header?.feed} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Suwannaphum:wght@100;300;400;700;900&display=swap" rel="stylesheet" />
                <link href="https://pphatdev.github.io/fonts/style.css" rel="stylesheet" />
                <meta name="Content-Security-Policy" content="default-src 'self'; img-src https://*; child-src 'none';" />
                <meta name="X-Content-Type-Options" content="nosniff" />
                <meta name="X-Frame-Options" content="SAMEORIGIN" />
                <meta name="X-XSS-Protection" content="1; report=<reporting-uri>" />
                <link rel="icon" href={this.header?.icons.ico} />
                <meta name="theme-color" content={this.header?.themeColor} />
                <link rel="manifest" href={this.header?.manifest} crossOrigin="use-credentials" />
            </>,
            document.head
        )
    }
}