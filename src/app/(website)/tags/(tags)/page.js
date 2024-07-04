import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "./hero";
import { ContentBackground } from "@/app/(website)/blogs/(blogs)/content-background";

import { defaultMeta  } from "@/data/meta";
import { Footer } from "@/components/footer";
export const viewport = defaultMeta


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
