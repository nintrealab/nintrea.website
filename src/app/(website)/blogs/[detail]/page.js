"use client";

import { Container } from "@/components/container";
import { PostHeader } from "./post-header";
import { Footer } from "@/components/footer";
import { viewport as dataViewport } from "@/data/meta";
import { GridBackground } from "../../(home)/background";
// import data from "@/data/post.json"
import { Post } from "@/components/post";
import { useState, useEffect } from "react";

export const viewport = dataViewport

export const Detail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const importedModule = await import(`./data/sample.json`);
                setData(importedModule.default);
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <GridBackground/>
            <div
                className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 pointer-events-none"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent, black)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
                }}
            ></div>

            <Container className={'max-w-4xl mx-auto px-3 sm:px-0'}>
                {/* Post Header */}
                {!loading &&<PostHeader data={{
                    title: data.title,
                    // breadcrumbs: [...data?.breadcrumbs],
                    authors: [...data?.authors],
                    date: data.create_date,
                    coverImage: "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.6ddb36ab.png&w=640&q=75",
                    tags: data.tags,
                    readingTime: 5
                }}/>}

                {!loading && data?.content.map( (item, key) => {
                    return <Post
                        key={key}
                        type={item.type}
                        text={item.text}
                        {...item?.properties}
                    ></Post>
                })}
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;