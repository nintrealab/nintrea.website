
import { Container } from "@/components/container";
export const metadata = defaultMeta;
import { ImageSlider } from "@/components/image-slider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { CardSlider } from "@/components/card-slider";
import { defaultMeta  } from "@/data/meta";
import CommandPalette from "@/components/command-palette";
// import { Author } from "@/components/author";
export const viewport = defaultMeta

export default function Home() {

    return (
        <>
            <Header/>
            <Hero/>
            <Container>
            <CommandPalette/>
            {/* <Author/> */}
                <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
                    {/* <ImageSlider data={data} reverse={'true'} style={{
                        "--width": "200px",
                        "--height": "200px",
                        "--quantity": "-7",
                        "--paused": "running"
                    }}/> */}
                    <CardSlider
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
                    />

                </div>
                <div className="w-full pt-10">

                    <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-65rem))]">
                        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"> </div>
                        <div className="space-y-16">
                        </div>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}
