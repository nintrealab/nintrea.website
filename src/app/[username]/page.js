"use client"
import { Container } from "@/components/container";
import { useParams } from "next/navigation";
import { ProfileHero } from "./hero";
import Link from "next/link";
import { authors } from "@/data/authors";
import { viewport as dataViewport } from "@/data/meta";
import { SmallScreenHero } from "./small-screen-hero";
import { CardEffect } from "@/components/card-effect";
import { Article, LoadingArticle } from "../(website)/blogs/(blogs)/article";
import { useEffect, useState } from "react";
export const viewport = dataViewport

export default function AuthorName()
{
    const router    = useParams()
    const username  = router.username.replaceAll(/\%40+/g, '')
    const author    = authors.find(a => a.username.replaceAll(/\@+/g, '') === username)

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
            {
                author && (
                    <>
                        <div className="relative w-full">
                            <div className="absolute w-full h-24 sm:h-80">
                                <svg width="512" height="147" viewBox="0 0 493 147" fill="currentColor" className="absolute top-0 right-0 h-32 -z-0 text-primary/10 w-fit sm:h-72">
                                    <path fill="currentColor" d="M230 78.4999C130.5 13.5 0.5 0 0.5 0H493V123C454 170 329.5 143.5 230 78.4999Z"/>
                                </svg>
                                <svg width="437" height="143" viewBox="0 0 437 143" fill="currentColor" className="absolute top-0 right-0 z-0 h-32 w-fit sm:h-72 text-primary/50">
                                    <path fill="currentColor" d="M203.638 76.4473C115.35 13.147 0 0 0 0H437V119.784C402.395 165.555 291.925 139.748 203.638 76.4473Z"/>
                                </svg>
                                <svg width="366" height="137" viewBox="0 0 366 137" fill="currentColor" className="absolute top-0 right-0 h-32 text-primary w-fit sm:h-72">
                                    <path fill="currentColor" d="M170.552 73.2397C96.6091 12.5954 0 0 0 0H366V114.758C337.017 158.608 244.495 133.884 170.552 73.2397Z"/>
                                </svg>
                            </div>
                        </div>
                        <Container className={'max-w-7xl'}>
                            <ProfileHero data={ author }/>
                            <SmallScreenHero data={ author }/>
                        </Container>

                        <div className="relative w-full max-w-7xl">
                            <div className="sticky z-10 w-full px-3 mx-auto mt-5 transition-all rounded-md bg-background/30 backdrop-blur-sm top-1 sm:top-3 border-foreground/10 scroll-smooth">
                                <Container className={'max-w-7xl py-2 sm:py-2 sm:px-3 xl:px-8 overflow-hidden bg-background/90 sm:bg-transparent rounded-xl sm:rounded-none border sm:border-none backdrop-blur-sm sm:backdrop-blur-none'}>
                                    <ul role="menubar" className="flex items-center justify-start px-3 text-xs sm:px-0 sm:text-base gap-x-4">
                                        <li role="menuitem"> <Link href="#posts"> <span className="text-base">✍️</span> Posts </Link> </li>
                                        <li role="menuitem"> <Link href="#achievement"> <span className="text-base">🎉</span> Achievement </Link> </li>
                                        <li role="menuitem"> <Link href="#about"> <span className="text-base">🪶</span> About </Link> </li>
                                    </ul>
                                </Container>
                            </div>

                            <section id="posts" className="pb-10 sm:border-t dark:divide-slate-200/5">
                                <div className={"grid max-w-7xl xl:px-12 gap-2 mt-10 sm:gap-4 mx-auto sm:grid-cols-2 md:grid-cols-4 px-3"}>
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
                            </section>

                            <section id="achievement" className="pb-10 dark:divide-slate-200/5">
                                <div className="relative w-full h-screen max-w-7xl sm:h-[calc(100vh_-10rem)] pt-1 sm:pt-10 overflow-hidden">
                                    <CardEffect className={`bg-green-200 dark:bg-purple-950`}>

                                    </CardEffect>
                                </div>
                            </section>

                            <section id="about" className="pb-10 mx-auto dark:divide-slate-200/5">
                                <div className="relative max-w-7xl w-full h-screen sm:h-[calc(100vh_-10rem)] pt-1 sm:pt-10 overflow-hidden">
                                    <CardEffect className={`bg-green-200 dark:bg-purple-950`}>

                                    </CardEffect>
                                </div>
                            </section>

                        </div>
                    </>
                )
            }

            {
                !author && (
                    <div className="flex flex-col items-center justify-center h-[calc(100vh_-10rem)] gap-1">
                        <h2>Not Found</h2>
                        <p>Could not find requested resource</p>
                        <Link href="/">Return Home</Link>
                    </div>
                )
            }
        </>
    )
}
