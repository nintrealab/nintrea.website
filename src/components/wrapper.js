"use client"
import { useEffect, useState } from "react"
import { Header } from "./header"
import { Container } from "./container"
import Link from "next/link"
import { AvatarIcon, CardStackIcon, HomeIcon, Link1Icon, ResetIcon, TriangleUpIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { useRouter } from "next/navigation"

export const Wrapper = ({ children }) => {

    const [isVisible, setIsVisible] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const toggleVisibility = () => {
            // if the user scrolls down, show the button
            window.scrollY > 1 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener("scroll", toggleVisibility)

        // clear the listener on component unmount
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    // handles the animation when scrolling to the top
    const scrollToTop = () => {
        isVisible &&
        window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    }
    return (
        <>
            {/* Top Header */}
            <Header className={!isVisible ? '':'transition duration-300 -translate-y-16 sm:translate-y-0'}/>

            {/* Content */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                {children}
            </div>

            {/* Small Screen Navigation */}
            <div className={cn(isVisible ? "opacity-100 sm:hidden" : "opacity-0 pointer-events-none -bottom-10", "transition duration-300  fixed z-50 w-full px-3 mx-auto bottom-3 sm:border border-foreground/10 scroll-smooth")}>
                <Container className={'max-w-7xl w-[90%] pt-2 pb-1 sm:py-5 px-3 bg-background/90 rounded-full overflow-hidden border'}>
                    <ul role="menubar" className="flex items-center mx-auto text-[10px] justify-evenly max-w-60 sm:text-base gap-x-4  backdrop-blur-sm">
                        <li role="menuitem"> <button type="button" onClick={router.back} className="flex flex-col items-center justify-center"> <ResetIcon className="size-4"/> <span>Back</span> </button> </li>
                        <li role="menuitem"> <Link href="/" className="flex flex-col items-center justify-center"> <HomeIcon className="size-5"/> <span>Home</span> </Link> </li>
                        <li role="menuitem"> <Link href="/blogs" className="flex flex-col items-center justify-center"> <CardStackIcon className="size-5"/> <span>Blogs</span> </Link> </li>
                        <li role="menuitem"> <Link href="/tags" className="flex flex-col items-center justify-center"> <Link1Icon className="size-5"/> <span>Tags</span> </Link> </li>
                        <li role="menuitem"> <Link href="/authors" className="flex flex-col items-center justify-center"> <AvatarIcon className="size-5"/> <span>Authors</span> </Link> </li>
                    </ul>
                </Container>
            </div>

            {/* Scroll top button */}
            <Button
                size="icon"
                variant="outline"
                className={`${isVisible ? "opacity-100 flex" : "hidden opacity-0 -bottom-10"} fixed z-[9999] bottom-16 sm:bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-5 rounded-full `}
                onClick={scrollToTop}
            >
                <TriangleUpIcon className="size-5"/>
            </Button>
        </>
    )
}