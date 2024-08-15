"use client"

import Link from "next/link";
import { Button } from "./button";
import { Container } from "./container";

export const Topic =()=>{
    return(
        <>
        <Container className=" flex items-center justify-center max-w-5xl ">
            <div className="flex items-center justify-center max-w-5xl ">
                <ul class="flex flex-wrap  items-center justify-center *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-3 *:py-1 gap-2  dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ">
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Sales</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Marketing</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">SEO</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">bLOCK A</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Block History</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Block S21</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Block WW2</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">About </li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Author</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Angkor</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Gentlment</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Laydy</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Block S21</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">Block WW2</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">About </li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">tags for new tester and doctor</li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">About testing tags for new tester </li>
                    <li className="hover:bg-accent hover:text-accent-foreground cursor-pointer dark:hover:bg-blue-200/20 m-1">About testing tags for new tester About testing</li>
                    <Link  className="flex items-center text-[10px] sm:font-medium sm:text-sm from-left text-primary" href="/tags/test-blogs">
                        <span className="relative text-xs bg-transparent rounded-2xl sm:text-sm">
                            Read more<span className="sr-only">{"SDSDSK"}</span>
                        </span>
                        <svg className="relative mt-px overflow-visible ml-2.5 text-primary/90 dark:text-primary" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0L3 3L0 6"></path>
                        </svg>
                    </Link>



                </ul>
            </div>
         </Container>
        </>
    );

}