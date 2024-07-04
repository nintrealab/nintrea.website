import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "./hero";

import { defaultMeta  } from "@/data/meta";
import { ListCards } from "./list-card";
import { Footer } from "@/components/_footer";
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
