import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ListCards } from "./list-card";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport


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
