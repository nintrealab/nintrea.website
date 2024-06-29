
import { Container } from "@/components/container";
import { Header } from "../../../components/header";
import { defaultMeta } from "@/data/meta";
import { Slider as SliderComponent } from "@/components/image-slider";
import Slide1 from "@/assets/images/slides/slider2_1.png";
import Slide2 from "@/assets/images/slides/slider2_2.png";
import Slide3 from "@/assets/images/slides/slider2_3.png";
import Slide4 from "@/assets/images/slides/slider2_4.png";
import Slide5 from "@/assets/images/slides/slider2_5.png";
import Slide6 from "@/assets/images/slides/slider2_6.png";
import Slide7 from "@/assets/images/slides/slider2_7.png";
import Slide8 from "@/assets/images/slides/slider2_8.png";
import Slide9 from "@/assets/images/slides/slider2_9.png";
import { Hero } from "./hero";
export const metadata = defaultMeta;

export default function Home() {

    const data = [
        {
            "src": Slide1.src,
            "alt": "Image 1",
        },
        {
            "src": Slide2.src,
            "alt": "Image 1",
        },
        {
            "src": Slide3.src,
            "alt": "Image 1",
        },
        {
            "src": Slide4.src,
            "alt": "Image 1",
        },
        {
            "src": Slide5.src,
            "alt": "Image 1",
        },
        {
            "src": Slide6.src,
            "alt": "Image 1",
        },
        {
            "src": Slide7.src,
            "alt": "Image 1",
        },
        {
            "src": Slide8.src,
            "alt": "Image 1",
        },
        {
            "src": Slide9.src,
            "alt": "Image 1",
        },
    ]
    return (
        <>
            <Header/>
            <Hero/>

            <Container>
                <div className="flex flex-col items-center justify-center gap-4">
                    <SliderComponent data={data} reverse={'true'} style={{
                        "--width": "200px",
                        "--height": "200px",
                        "--quantity": "9",
                        "--paused": "running"
                    }}/>
                    <SliderComponent data={data} reverse={'false'} style={{
                        "--width": "200px",
                        "--height": "200px",
                        "--quantity": "9",
                        "--paused": "running"
                    }}/>
                </div>
            </Container>
        </>
    );
}
