import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "@/components/Footer";
import { PostHeader } from "@/components/post-header";

export const metadata = defaultMeta;

export default function Blogs() {

    return (
        <>
            <Header/>

            <Container>
                {/* <Footer/> */}
                <PostHeader />

            </Container>
        </>
    );
}
