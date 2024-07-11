import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";

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
