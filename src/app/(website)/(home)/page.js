
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { CardSlider } from "@/components/card-slider";
import { defaultMeta  } from "@/data/meta";
import { Author } from "@/components/author";
import { ListArticles } from "../blogs/(blogs)/list-articles";
import { ImageSlider } from "@/components/image-slider";
import { Button } from "@/components/button";
export const viewport = defaultMeta

export default function Home() {

    return (
        <>
            <Header/>
            <Hero/>
            <Container>
            {/* <Author/> */}
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
                        "--quantity": "-8",
                        "--paused": "paused"
                    }}/>
                    {/* <CardSlider
                        className={'hidden xl:block'}
                        data={[
                            {
                                src: "https://github.com/pphatdev.png",
                                title: "LEAT Sophat",
                                joined: "January 23 2020",
                                description: "Thoughts from a wandering mind. I am the senior front-end developer of @turbotechlabs , and an UI/UX designer."
                            },
                            {
                                src: "https://github.com/SVA-bundittt.png",
                                title: "HOL Bundit",
                                joined: "January 23 2020",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                            {
                                src: "https://github.com/sithuch.png",
                                title: "CHHEM Sithuch",
                                joined: "Jun 24 2024",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                            {
                                src: "https://github.com/vyniivaa-dev.png",
                                title: "MEAN Navy",
                                joined: "Jun 24 2024",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                        ]}
                        reverse={'false'}
                        style={{
                            "--width": "390px",
                            "--height": "200px",
                            "--quantity": "-4",
                            "--paused": "paused",
                            "--speed": "20s"
                        }}
                    /> */}

                </div>

                <section className="relative w-full h-[calc(100vh_-10rem)] pt-10 overflow-hidden">
                    <div className="absolute bottom-0 z-50 flex items-end justify-center w-full from-background bg-gradient-to-t h-52">
                        <Button variant="outline" className="rounded-full"> Read more </Button>
                    </div>
                    <ListArticles/>
                </section>

                <Footer/>
            </Container>
        </>
    );
}
