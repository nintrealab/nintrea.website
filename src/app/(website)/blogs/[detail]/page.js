"use client";

import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Hero } from "../(blogs)/hero";
import { ContentBackground } from "../(blogs)/content-background";
import { PostHeader } from "./post-header";

import { defaultMeta  } from "@/data/meta";
import { Footer } from "@/components/footer";
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
                <PostHeader/>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;