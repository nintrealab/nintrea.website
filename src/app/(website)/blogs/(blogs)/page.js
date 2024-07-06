import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ListArticles } from "./list-articles";
import { Hero } from "./hero";
import { ContentBackground } from "./content-background";
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
                {/* <Footer/> */}

                <ListArticles/>
                <Footer/>
            </Container>
        </>
    );
}
