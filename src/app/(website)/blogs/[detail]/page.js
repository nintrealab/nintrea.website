import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { ListArticles } from "../(blogs)/list-articles";
import { Hero } from "../(blogs)/hero";
import { ContentBackground } from "../(blogs)/content-background";

import { defaultMeta  } from "@/data/meta";
export const viewport = defaultMeta

export const Detail = () => {
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


export default Detail;