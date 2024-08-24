"use client"

import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";
import {  } from "../data/posts";
export const Topic =()=>{
    return(
        <>
        <Container className=" flex items-center justify-center max-w-5xl ">
            <div className="flex items-center justify-center max-w-5xl ">
                <ul class="flex flex-wrap  items-center justify-center *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-3 *:py-1 gap-2  dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ">
                   {/* <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Sales</li> */}
                    <Link  className="flex items-center text-[10px] sm:font-medium sm:text-sm 
                                    hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1" href="/tags/test-blogs"
                    >
                        <span className="relative text-xs bg-transparent rounded-2xl sm:text-sm">
                            Read more<span className="sr-only">{"SDSDSK"}</span>
                        </span>
                    </Link>



                </ul>
            </div>
         </Container>
        </>
    );

}