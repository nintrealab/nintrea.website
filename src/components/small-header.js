"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { AvatarIcon, CardStackIcon, HomeIcon, Link1Icon } from "@radix-ui/react-icons";
import { Container } from "./container";
import { cn } from "@/lib/utils";

export const SmallScreenHeader = ({ className = "" }) => {
    const path = usePathname();
    return (
        <div className={cn(className,"fixed z-10 w-full px-3 mx-auto transition-all bottom-3 sm:border border-foreground/10 scroll-smooth")}>
            <Container className={'max-w-7xl w-[90%] pt-2 pb-1 sm:py-5 px-3 bg-background/90 rounded-full overflow-hidden border'}>
                <ul role="menubar" className="flex items-center mx-auto text-[10px] justify-evenly max-w-60 sm:text-base gap-x-4  backdrop-blur-sm">
                    <li role="menuitem"> <Link href="/" className="flex flex-col items-center justify-center"> <HomeIcon className="size-5"/> <span>Home</span> </Link> </li>
                    <li role="menuitem"> <Link href="/blogs" className="flex flex-col items-center justify-center"> <CardStackIcon className="size-5"/> <span>Blogs</span> </Link> </li>
                    <li role="menuitem"> <Link href="/tags" className="flex flex-col items-center justify-center"> <Link1Icon className="size-5"/> <span>Tags</span> </Link> </li>
                    <li role="menuitem"> <Link href="/authors" className="flex flex-col items-center justify-center"> <AvatarIcon className="size-5"/> <span>Authors</span> </Link> </li>
                </ul>
            </Container>
        </div>
    )
}
