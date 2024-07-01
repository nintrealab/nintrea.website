
import { Container } from "@/components/container";
import { Header } from "../../../components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "../../../components/Footer";

export const metadata = defaultMeta;
import { ImageSlider } from "@/components/image-slider";
import { Hero } from "./hero";
import Slide1 from "@/assets/images/slides/slider2_1.png";
import Slide2 from "@/assets/images/slides/slider2_2.png";
import Slide3 from "@/assets/images/slides/slider2_3.png";
import Slide4 from "@/assets/images/slides/slider2_4.png";
import Slide5 from "@/assets/images/slides/slider2_5.png";
import Slide6 from "@/assets/images/slides/slider2_6.png";
import Slide7 from "@/assets/images/slides/slider2_7.png";
import Slide8 from "@/assets/images/slides/slider2_8.png";
import Slide9 from "@/assets/images/slides/slider2_9.png";
import { CardSlider } from "@/components/card-slider";
export default function Home() {

    const data = [
        {
            "src": Slide1.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide2.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide3.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide4.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide5.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide6.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide7.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide8.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
        {
            "src": Slide9.src,
            "alt": "Image 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
        },
    ]
    return (
        <>
            <Header/>
            <Hero/>

            <Container>
                <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
                    {/* <ImageSlider data={data} reverse={'true'} style={{
                        "--width": "200px",
                        "--height": "200px",
                        "--quantity": "-7",
                        "--paused": "running"
                    }}/> */}

                    <CardSlider
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
                <Footer/>
            </Container>
        </>
    );
}
