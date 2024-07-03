import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { Hero } from "./hero";
import { ContentBackground } from "../blogs/(blogs)/content-background";

export const metadata = defaultMeta;

export default function Blogs() {

    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <Footer/>
            </Container>
        </>
    );
}
