import React from "react";
import { menu } from "../data/menu.js";
import Container from "./Container.js";

import Logo from "../assets/logo.png";

export const Footer = () => {
    return (
        <div className="w-full py-3 mx-auto bg-red-300">
        <>
        <Container className={'flex w-full items-center justify-between justify-items-center'}>
            <div></div>
            <div className="justify-center">
                <img src={Logo} width={150} height={150} className=""></img>
            </div>
            <div></div>
        </Container>
        <Container className={'flex w-full items-center my-12 '}>
            <>
                <div className="flex w-full justify-between justify-items-center">
                    <div className="my-12"></div>
                    <div className="flex justify-between ">
                        <p>Copyright 2023 - Absolute Post. All rights reserved. No part of this website may be reproduced without permission.</p>
                    </div>
                    <div className="flex"></div>   
                </div>
{/* 
                <div className="flex w-full justify-between justify-items-center">
                    <div className="my-12"></div>
                    <div className="flex justify-between ">
                        <p>Copyright 2023 - Absolute Post. All rights reserved. No part of this website may be reproduced without permission.</p>
                    </div>
                    <div className="flex"></div>
                </div> */}
            </> 
        </Container>
        </>
      </div>
    );
}

                        {/* <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                            <div className="flex flex-auto w-full mx-auto ">
                                <div className="sm:flex sm:items-center lg:justify-between ">
                                {/* <div className="sm:flex sm:items-center sm:justify-between "> */}
                                    {/* <a href="#">sdsd</a>
                                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                                        <li>
                                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                                        </li>
                                        <li>
                                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                                        </li>
                                        <li>
                                            <a href="#" class="hover:underline">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </footer> */}
                        {/* <div>jjd</div>  */}
export default Footer;