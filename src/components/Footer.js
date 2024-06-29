import React from "react";
import { Container } from "./Container";
import { Logo } from "./logo";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";


// import Logo from "../assets/logo.png";

export const Footer = () => {
    return (
        // <div className="w-full py-3 mx-auto bg-background">
        <>
        <div className="flex flex-col items-center justify-between ">
                <Logo className=" h-32" />
                <div className="flex">
                    <Link href="/">
                        <InstagramLogoIcon className="w-12 h-12"/>
                    </Link>
                    <Link href="/">
                        <TwitterLogoIcon className="w-12 h-12"/>
                    </Link>
                    <Link href="/">
                        <LinkedInLogoIcon className="w-12 h-12"/>
                    </Link>
                    <Link href="/">
                        <GitHubLogoIcon className="w-12 h-12"/> 
                    </Link>
                </div>
                <div className="flex w-full justify-between justify-items-center">
                    <div className="my-12"></div>
                    <div className="">
                        <p>Copyright 2023 - Absolute Post. All rights reserved. No part of this website may be reproduced without permission.</p>
                        <p>Copyright 2023 - Absolute Post. All rights reserved. No part of this website may be reproduced without permission.</p>
                    </div>
                    <div className="flex"></div>   
                </div>
            </div> 
        </>
    );
}
// export {Footer};