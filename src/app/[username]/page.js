"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useParams } from "next/navigation";
import { Logo } from "@/components/logo";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Button } from "@/components/button";
import { CheckCircledIcon, CheckIcon, FigmaLogoIcon, GitHubLogoIcon, InstagramLogoIcon, PlusIcon } from "@radix-ui/react-icons";


export default function AuthorName()
{
    const router    = useParams()
    const username  = router.username.replaceAll(/\%40+/g, '')

    return (
        <>
            <Header/>
            <div className="relative w-full">
                <div className="absolute w-full h-96">
                    <svg width="366" height="137" viewBox="0 0 366 137" fill="currentColor" className="absolute top-0 right-0 z-20 text-primary w-fit h-72">
                        <path fill="currentColor" d="M170.552 73.2397C96.6091 12.5954 0 0 0 0H366V114.758C337.017 158.608 244.495 133.884 170.552 73.2397Z"/>
                    </svg>

                    <svg width="437" height="143" viewBox="0 0 437 143" fill="currentColor" className="absolute top-0 right-0 z-10 w-fit h-72 text-primary/50">
                        <path fill="currentColor" d="M203.638 76.4473C115.35 13.147 0 0 0 0H437V119.784C402.395 165.555 291.925 139.748 203.638 76.4473Z"/>
                    </svg>

                    <svg width="512" height="147" viewBox="0 0 493 147" fill="currentColor" className="absolute top-0 right-0 z-0 text-primary/10 w-fit h-72">
                        <path fill="currentColor" d="M230 78.4999C130.5 13.5 0.5 0 0.5 0H493V123C454 170 329.5 143.5 230 78.4999Z"/>
                    </svg>
                </div>
            </div>
            <Container className={'max-w-7xl'}>
                <div className="relative w-full">


                    <div className="flex flex-col gap-5 mt-12">
                        <div className="flex items-center justify-center bg-primary/20 drop-shadow size-32 rounded-3xl">
                            <Logo className={'text-foreground'}/>
                        </div>
                        <h1 className="inline-flex items-center gap-2 text-3xl font-extrabold tracking-tight uppercase text-primary">
                            { username }
                            <span><CheckCircleIcon className="size-6 text-sky-600"/></span>
                        </h1>

                        <div className="flex gap-2">
                            <Button variant="outline" className="rounded-full">
                                <span> {`Follow`} </span>
                                <PlusIcon className="ml-1 size-4"/>
                            </Button>
                            {/* <Button variant="outline" className="rounded-full">
                                <span> {`Following`} </span>
                                <CheckIcon className="ml-1 size-4"/>
                            </Button> */}
                        </div>

                        {/* <div>
                            <Button variant="outline">Follow</Button>
                        </div> */}


                        <div className="flex flex-row gap-2">
                            <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                                <GitHubLogoIcon className="size-4"/>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                                <InstagramLogoIcon className="size-4"/>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full text-foreground/60 hover:text-foreground">
                                <FigmaLogoIcon className="size-4"/>
                            </Button>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </Container>
        </>
    )
}
