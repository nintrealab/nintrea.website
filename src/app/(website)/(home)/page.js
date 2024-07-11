
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ListArticles } from "../blogs/(blogs)/list-articles";
import { ImageSlider } from "@/components/image-slider";
import { Button } from "@/components/button";
import { CardEffect } from "@/components/card-effect";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport

export default function Home() {

    return (
        <>
            <Header/>
            <Hero/>
            <Container>

                <div className="flex flex-col items-center justify-center max-w-2xl gap-4 mx-auto animate-fade-in">
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
                </div>

                <section className="relative w-full h-screen sm:h-[calc(100vh_-10rem)] pt-10 overflow-hidden">
                    <div className="absolute bottom-0 z-50 flex items-end justify-center w-full pointer-events-none from-background bg-gradient-to-t h-52">
                        <Button variant="outline" className="rounded-full pointer-events-auto"> Read more </Button>
                    </div>
                    <ListArticles/>
                </section>



                <section className="relative w-full h-screen sm:h-[calc(100vh_-20rem)] pt-10 overflow-hidden">
                    <CardEffect className={`bg-primary/10 dark:bg-purple-950`}>
                    </CardEffect>
                </section>

                <Footer/>
            </Container>
        </>
    );
}
