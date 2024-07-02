import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { ListArticles } from "./list-articles";
import { Hero } from "./hero";
import { ContentBackground } from "./content-background";

export const metadata = defaultMeta;

export default function Blogs() {

    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <ListArticles/>
                <Footer/>
            </Container>
        </>
    );
}
