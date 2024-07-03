import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";

export const metadata = defaultMeta;

export const Detail = () => {
    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <h1>Tags Detail</h1>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;