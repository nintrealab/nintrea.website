"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ContentBackground } from "./content-background";
import { viewport as dataViewport } from "@/data/meta";
import { CardEffect } from "@/components/card-effect";
import { Article, LoadingArticle } from "./article";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
export const viewport = dataViewport


export default function Blogs() {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/blogs.json');
                const currentData = await response.json();
                setData(currentData.result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <ContentBackground/>
            <Hero/>

            <Container>
                <div className={cn("grid max-w-5xl gap-2 sm:gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 px-3")}>
                    {
                        isLoading
                        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map( (_, key)=> {
                            return (
                                <CardEffect key={key}>
                                    <LoadingArticle/>
                                </CardEffect>
                            )
                        })
                        : Array.from(data).map( (post, key)=> {
                            return (
                                <CardEffect key={key}>
                                    <Article data={post}/>
                                </CardEffect>
                            )
                        })
                    }
                </div>
                <Footer/>
            </Container>
        </>
    );
}
