"use client"
import React from "react";
import { Logo } from "./logo";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation";


// import Logo from "../assets/logo.png";

export const Footer = () => {

    const route = useRouter()

    const useGoto = () => {
        route.push('/')
    }

    return (
        <>
        <div className="flex flex-col items-center justify-between ">
                <Logo className="mt-10 " />
                <div className="flex gap-2">
                    {/* <Button size="icon" variant="ghost" onClick={useGoto}>
                        <InstagramLogoIcon className="size-6"/>
                    </Button> */}

                    <Link href="/">
                        <InstagramLogoIcon className="size-6"/>
                    </Link>
                    <Link href="/">
                        <TwitterLogoIcon className="size-6"/>
                    </Link>
                    <Link href="/">
                        <LinkedInLogoIcon className="size-6"/>
                    </Link>
                    <Link href="https://github.com/nintrealab" target="blank">
                        <GitHubLogoIcon className="size-6" />
                    </Link>
                </div>
                <div className="flex justify-between w-full justify-items-center">
                    <div className="my-12"></div>
                    <div className="justify-between my-10 text-center justify-items-center">
                        <p>Copyright 2023 - Absolute Post. All rights reserved. No part of this website may be reproduced without permission.</p>
                        <p>Please review our Terms and Conditions. Please review our Privacy Policy.</p>
                    </div>
                    <div className="flex"></div>   
                </div>
            </div> 
        </>
    );
}
// export {Footer};