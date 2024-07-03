import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { Hero } from "../(blogs)/hero";
import { ContentBackground } from "../(blogs)/content-background";
import { PostHeader } from "./post-header";

export const metadata = defaultMeta;

export const Detail = () => {
    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <PostHeader/>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;