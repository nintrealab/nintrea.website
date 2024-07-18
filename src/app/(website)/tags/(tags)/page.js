// import { Header } from "@/components/header";
"use client";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
// import { Hero } from "./hero";
import { ContentBackground } from "@/app/(website)/blogs/(blogs)/content-background";
import { viewport as dataViewport } from "@/data/meta";
export const viewport = dataViewport

import { CardStack } from "@/components/card-stack";
import { Header } from "@/components/header";
import { Hero } from "./hero";
// import { Container } from "postcss";

export default function CardStackDemo() {
  return (
    <>
        <ContentBackground/>
        <Header/>
        <Hero/>
        <Container>
            <div className="flex w-1/3 justify-center m-auto ">
                <div className="h-72 flex items-center justify-center m-2 w-full">
                    <CardStack items={CARDS} />
                </div>
                <div className="h-72 flex items-center justify-center m-2 w-full">
                    <CardStack items={CARDS} />
                </div>
                <div className="h-72 flex items-center justify-center m-2 w-full">
                    <CardStack items={CARDS} />
                </div>
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