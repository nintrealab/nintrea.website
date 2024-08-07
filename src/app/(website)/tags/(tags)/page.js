"use client";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
// import { Hero } from "./hero";
import { ContentBackground } from "@/app/(website)/blogs/(blogs)/content-background";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport

import { CardStack } from "@/components/card-stack";
import { Hero } from "./hero";
import { Topic } from "@/components/topic-tag";
// import { Container } from "postcss";

export default function CardStackDemo() {
    return (
        <>
            <ContentBackground/>
            <Hero/>
            
            <Container className="max-w-5xl items-center justify-center">
                <Topic/>
                <h2 className="text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white h-[5rem] mt-20 mb-10 text-foreground">Main Card</h2>
                <div className="grid gap-4 grid-cols-1 m-5 sm:grid-cols-2 lg:grid-cols-3">
                    <CardStack items={CARDS} />
                    <CardStack items={CARDS} />
                    <CardStack items={CARDS} />
                </div>
            </Container>
            <Footer/>
        </>
    );
}

function Highlight({ children, className }) {
    return (
        <span
            className={`${"font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5"} ${className? className : ""}`}
        >
            {children}
        </span>
    );
}

const CARDS = [
    {
        id: 0,
        name: "CHHEM Sithuch",
        designation: "Next.Js Trainee",
        content: (
            <p>
                These cards are amazing, <Highlight>I want to know more about Next.js</Highlight> So I can Become a Next.js Developer 🙏
            </p>
        ),
    },
    {
        id: 1,
        name: "LEAT Sophat",
        designation: "Senior Front-End",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "MEAN Navy",
        designation: "Front-End Dev",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];