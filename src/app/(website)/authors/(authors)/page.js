import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Hero } from "./hero";
import { ContentBackground } from "@/app/(website)/blogs/(blogs)/content-background";

import { defaultMeta  } from "@/data/meta";
import { ListCards } from "./list-card";
export const viewport = defaultMeta


export default function Authors() {

    return (
        <>
            {/* <ContentBackground/> */}
            <Header/>

            <Hero/>

            <Container>
                <ListCards/>
                <Footer/>
            </Container>
        </>
    );
}
