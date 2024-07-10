"use client"
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";

import { defaultMeta  } from "@/data/meta";
import { useParams } from "next/navigation";
export const viewport = defaultMeta


export const Detail = () => {
    const { detail } = useParams()
    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <h1>Tags Detail</h1>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;