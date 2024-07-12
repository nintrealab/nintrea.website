
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { CardSlider } from "@/components/card-slider";
import { defaultMeta  } from "@/data/meta";
import CommandPalette from "@/components/command-palette";
// import { Author } from "@/components/author";
import { ListArticles } from "../blogs/(blogs)/list-articles";
import { ImageSlider } from "@/components/image-slider";
import { Button } from "@/components/button";
import { CardEffect } from "@/components/card-effect";
import { viewport as dataViewport } from "@/data/meta";
import { HeroHighlightBoard } from "./hero-highlight-board";
import { Meteors } from "@/components/meteors";
import { MeteorsCard } from "./meteor-card";
export const viewport = dataViewport

export default function Home() {

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
                <section className="relative w-full h-screen sm:h-[calc(100vh_-20rem)] pt-10 overflow-hidden">

                    {/* background */}
                    <section className="absolute w-full grid grid-cols-2 h-screen sm:h-[calc(100vh_-20rem)] pt-10 overflow-hidden">
                        <HeroHighlightBoard/>
                    </section>



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


                <section className="relative w-full h-screen sm:h-[calc(100vh_-10rem)] pt-10 overflow-hidden">

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
