import React from "react";
import { Logo } from "./logo";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";


// import Logo from "../assets/logo.png";

export const Footer = () => {
    return (
        <>

        <div className="flex flex-col items-center justify-between ">
                <Logo className=" mt-10" />
                <div className="flex gap-2">
                    <Link href="/">
                        <buntton className=""><InstagramLogoIcon className="size-6"/></buntton>
                    </Link>
                    <Link href="/">
                        <TwitterLogoIcon className="size-6"/>
                    </Link>
                    <Link href="/">
                        <LinkedInLogoIcon className="size-6"/>
                    </Link>
                    <Link href="https://github.com/nintrealab">
                        <GitHubLogoIcon className="size-6" />
                        
                    </Link>
                </div>
                <div className="flex w-full justify-between justify-items-center">
                    <div className="my-12"></div>
                    <div className="justify-between justify-items-center text-center my-10">
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