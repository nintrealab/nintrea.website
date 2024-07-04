import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";

import { defaultMeta  } from "@/data/meta";
import { Footer } from "@/components/footer";
export const viewport = defaultMeta


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