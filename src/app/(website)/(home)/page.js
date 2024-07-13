"use client";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ListArticles } from "../blogs/(blogs)/list-articles";
import { Button } from "@/components/button";
import { CardEffect } from "@/components/card-effect";
import { viewport as dataViewport } from "@/data/meta";
import { HeroHighlightBoard } from "./hero-highlight-board";
import Image from "next/image";
import { PinBottomIcon, QuoteIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export const viewport = dataViewport

export default function Home() {

    const router = useRouter()

    // Scroll to id target id existing hash
    useEffect(() => {
        router.push(window.location.hash)
    }, [ router ])

    return (
        <>
            <Header/>
            <Hero/>
            <Container>

                {/* <div className="flex flex-col items-center justify-center max-w-2xl gap-4 mx-auto animate-fade-in">
                    <ImageSlider data={[
                            { src: "https://github.com/pphatdev.png",},
                            { src: "https://github.com/SVA-bundittt.png", },
                            { src: "https://github.com/sithuch.png", },
                            { src: "https://github.com/vyniivaa-dev.png", },
                            { src: "https://github.com/pphatdev.png",},
                            { src: "https://github.com/SVA-bundittt.png", },
                            { src: "https://github.com/sithuch.png", },
                            { src: "https://github.com/vyniivaa-dev.png", },
                        ]} reverse={'false'} style={{
                        "--width": "50px",
                        "--height": "50px",
                        "--quantity": "-6",
                        "--paused": "paused"
                    }}/>
                </div> */}



                <section className="relative items-center justify-center hidden w-full h-56 overflow-hidden sm:flex sm:mt-20">
                    <div className="absolute inset-0">
                        <HeroHighlightBoard/>
                    </div>
                    <Link title="quote" href={'#quote'} className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] p-2 duration-1000 hover:animate-none pointer-events-auto relative hover:shadow-[0_6px_20px_rgba(0,118,255,23%)]  bg-primary/90 rounded-full text-primary-foreground font-light transition ease-linear">
                        <PinBottomIcon className="w-4 h-4"/>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                    </Link>
                </section>


                <div id="quote"></div>


                <section className="relative w-full mt-20">
                    {/* background */}
                    <div className="absolute grid w-full h-[50rem] grid-cols-2 px-1 pt-10 overflow-hidden">
                        <HeroHighlightBoard/>
                    </div>
                    <div className="grid gap-10 pointer-events-none sm:grid-cols-2 justify-evenly">
                        <div className="z-10 w-full mx-auto">
                            <Image
                                width={512}
                                height={512}
                                className="object-cover w-full sm:w-96 aspect-square sm:aspect-[4/5] mx-auto sm:rounded-lg"
                                src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=300&h=300&q=80`}
                                // src={data.image}
                                alt={``}
                            />
                        </div>
                        <div className="max-w-xl p-5 sm:p-0">
                            <h2 className="inline-flex items-start text-base font-semibold leading-7 sr-only text-foreground">Quote</h2>
                            <p className="relative flex flex-wrap mt-0 text-4xl font-extrabold tracking-tight sm:mt-4 text-primary">
                                <QuoteIcon className="w-9 h-9 scale-x-[-1] -translate-x-4 sm:-translate-x-10"/> To share everything that we learned is our hobby.  <QuoteIcon className="absolute bottom-0 right-0 mt-1 w-9 h-9"/>
                            </p>
                            <p className="mt-6">{`Sharing knowledge and experiences with others is a wonderful hobby. It not only helps others learn and grow, but it also reinforces our own understanding and retention of the material. Plus, it's a great way to connect with like-minded individuals and build a sense of community.`}</p>
                        </div>
                    </div>
                </section>


                {/* <section className="max-w-6xl mx-auto my-20 justify-evenly">
                    <CardEffect className={`bg-green-200 dark:bg-purple-950`}>
                        <div className="grid items-center grid-cols-3 gap-3 h-96">
                            <MeteorsCard/>
                            <MeteorsCard/>
                            <MeteorsCard/>
                        </div>
                    </CardEffect>
                </section> */}


                <section className="relative w-full h-screen sm:h-[calc(100vh_-10rem)] sm:mt-20 pt-10 overflow-hidden">

                    <div className="absolute inset-0 top-1/2">
                        <HeroHighlightBoard></HeroHighlightBoard>
                    </div>
                    <div className="absolute bottom-0 z-10 flex items-end justify-center w-full pointer-events-none pb-7 from-background bg-gradient-to-t h-52">
                        {/* <Button variant="outline" className="rounded-full pointer-events-auto"> Read more </Button> */}

                        <Button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] pointer-events-auto relative hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] px-8 py-2 bg-primary/90 rounded-full text-primary-foreground font-light transition duration-200 ease-linear">
                            <span className="leading-7 ">{`Learn More`}</span>
                            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                        </Button>
                    </div>
                    <ListArticles/>

                </section>




                <section className="relative w-full h-screen sm:h-[calc(100vh_-20rem)] pt-10 overflow-hidden">
                    <CardEffect className={`bg-green-200 dark:bg-purple-950`}>

                    </CardEffect>
                </section>

                <section className="relative w-full h-screen sm:h-[calc(100vh_-20rem)] pt-10 overflow-hidden">
                    <HeroHighlightBoard/>
                </section>


                <Footer/>
            </Container>
        </>
    );
}
