"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useParams } from "next/navigation";
import { ProfileHero } from "./hero";
import { LOGO } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import { ListArticles } from "../(website)/blogs/(blogs)/list-articles";


export default function AuthorName()
{
    const router    = useParams()
    const username  = router.username.replaceAll(/\%40+/g, '')

    return (
        <>
            <Header/>
            <div className="relative w-full">
                <div className="absolute w-full h-24 sm:h-80">
                    <svg width="512" height="147" viewBox="0 0 493 147" fill="currentColor" className="absolute top-0 right-0 h-32 -z-0 text-primary/10 w-fit sm:h-72">
                        <path fill="currentColor" d="M230 78.4999C130.5 13.5 0.5 0 0.5 0H493V123C454 170 329.5 143.5 230 78.4999Z"/>
                    </svg>
                    <svg width="437" height="143" viewBox="0 0 437 143" fill="currentColor" className="absolute top-0 right-0 z-0 h-32 w-fit sm:h-72 text-primary/50">
                        <path fill="currentColor" d="M203.638 76.4473C115.35 13.147 0 0 0 0H437V119.784C402.395 165.555 291.925 139.748 203.638 76.4473Z"/>
                    </svg>
                    <svg width="366" height="137" viewBox="0 0 366 137" fill="currentColor" className="absolute top-0 right-0 h-32 text-primary w-fit sm:h-72">
                        <path fill="currentColor" d="M170.552 73.2397C96.6091 12.5954 0 0 0 0H366V114.758C337.017 158.608 244.495 133.884 170.552 73.2397Z"/>
                    </svg>
                </div>
            </div>
            <Container className={'max-w-7xl'}>
                <ProfileHero data={{
                    fullname: "LEAT Sophat",
                    image: "https://github.com/pphatdev.png",
                    username: username,
                }}/>
            </Container>

            <div className="relative">
                <div className="sticky top-0 z-10 w-full mx-auto mt-10 transition-all border-b border-foreground/10 scroll-smooth backdrop-blur-sm bg-background/70">
                    <Container className={'max-w-7xl py-5 px-3 bg-background/90'}>
                        <ul role="menubar" className="flex items-center justify-start gap-x-4">
                            <li role="menuitem"> <Link href="#posts"> Posts </Link> </li>
                            <li role="menuitem"> <Link href="#about"> About </Link> </li>
                        </ul>
                    </Container>
                </div>
                <div className="divide-y dark:divide-slate-200/5">
                    <ListArticles className={'w-full max-w-7xl xs:px-4 sm:px-6 md:px-8 xl:px-12  md:grid-cols-4 mt-10'}/>
                </div>
            </div>
        </>
    )
}
