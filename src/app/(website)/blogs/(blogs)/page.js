import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";

export const metadata = defaultMeta;

export default function Blogs() {

    return (
        <>
            <Header/>

            <Container>
                <Footer/>
            </Container>
        </>
    );
}
