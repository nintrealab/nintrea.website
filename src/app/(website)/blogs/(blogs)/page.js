import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { ListArticles } from "./list-articles";

export const metadata = defaultMeta;

export default function Blogs() {

    return (
        <>
            <Header/>

            <Container>
                <ListArticles/>
                <Footer/>
            </Container>
        </>
    );
}
