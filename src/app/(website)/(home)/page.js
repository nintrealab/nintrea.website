'use client';
import { Container } from "@/components/Container";
import { Header } from "../../../components/Header";
import { Hero } from "./Hero";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>

            <Container>
                Welcome Home
            </Container>
        </>
    );
}
