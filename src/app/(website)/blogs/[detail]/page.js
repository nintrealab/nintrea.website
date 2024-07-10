"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "../(blogs)/hero";
import { ContentBackground } from "../(blogs)/content-background";
import { PostHeader } from "./post-header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport

export const Detail = () => {
    const { detail } = useParams()
    return (
        <>
            <ContentBackground/>
            <Header/>

            <Hero/>

            <Container>
                <PostHeader/>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;