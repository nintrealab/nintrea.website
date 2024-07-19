"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";
import { useParams } from "next/navigation";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport


export const Detail = () => {
    const { detail } = useParams()
    return (
        <>
            <ContentBackground/>
            <Hero/>

            <Container>
                <h1>Tags Detail</h1>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;