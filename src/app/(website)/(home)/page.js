
import { Container } from "@/components/Container";
import { Header } from "../../../components/Header";
import { Hero } from "./Hero";
import { defaultMeta } from "@/data/meta";
import { Slider } from "./slider";

export const metadata = defaultMeta;

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>

            <Container>
                <Slider/>
            </Container>
        </>
    );
}
