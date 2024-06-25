import React from "react";
import { menu } from "../../data/menu.js";
import Container from "./Container.js";

import Logo from "../assets/apple-touch-icon.png";

export const Footer = () => {
    return (
        <div className="w-full py-3 mx-auto bg-red-300">
            <Container className={'flex w-full items-center justify-between'}>
                <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                    <div className="w-full max-w-screen-xl mx-auto md:py-8">
                        <div className="sm:flex sm:items-center sm:justify-between ">
                            <a href="#">sdsd</a>
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
                </footer>
            </Container>
        </div>
    );
}

export default Footer;