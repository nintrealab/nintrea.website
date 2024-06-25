import React from "react";
import { menu } from "../data/menu.js";
import Container from "./Container.js";

import Logo from "../../public/logo.png";

export const Header = () => {
    return (
        <div className="w-full py-3 mx-auto bg-red-300">
            <Container className={'flex w-full items-center justify-between'}>
                <div>
                    <img src={Logo} alt="Logo" width={50} height={50} />
                </div>
                <nav>
                    <ul className="flex items-center justify-between">
                        {menu.map((item, index) => (
                            <li key={index}>
                                <a href={item.path} className="px-2 py-1">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div>
                    Logo
                </div>
            </Container>
        </div>
    );
}

export default Header;