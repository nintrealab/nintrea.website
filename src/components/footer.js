"use client"
import React from "react";
import { Logo } from "./logo";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const Footer = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-between ">
                <Logo className="mt-10 " />
                <div className="flex gap-2">
                    {/* <Button size="icon" variant="ghost" onClick={useGoto}>
                        <InstagramLogoIcon className="size-6"/>
                    </Button> */}

                    <Link href="/" aria-label="Instagram">
                        <InstagramLogoIcon className="size-6"/>
                    </Link>
                    <Link href="/" aria-label="Twitter">
                        <TwitterLogoIcon className="size-6"/>
                    </Link>
                    <Link href="/" aria-label="LinkedIn">
                        <LinkedInLogoIcon className="size-6"/>
                    </Link>
                    <Link href="https://github.com/nintrealab" target="blank" aria-label="github">
                        <GitHubLogoIcon className="size-6" />
                    </Link>
                </div>
                <div className="flex justify-between w-full justify-items-center">
                    <div className="my-12"></div>
                    <div className="justify-between my-10 text-sm text-center justify-items-center">
                        <p>@2020 - {new Date().getFullYear()} NINTREA, All Right Reseved.</p>
                    </div>
                    <div className="flex"></div>
                </div>
            </div>
        </>
    );
}