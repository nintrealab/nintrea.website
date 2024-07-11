import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ListArticles } from "./list-articles";
import { Hero } from "./hero";
import { ContentBackground } from "./content-background";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport


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
