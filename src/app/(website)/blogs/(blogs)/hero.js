"use client"
import { Container } from "@/components/container";
import { GridBackground } from "../../(home)/background";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button";
import { useState } from "react";
import CommandPalette from "@/components/command-palette";

export const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='w-full h-full mb-10 sm:mb-0 sm:h-[35rem]'>
            <GridBackground/>
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 pointer-events-none" style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
            }}></div>
            <Container className={cn('flex flex-col w-full gap-2 max-w-5xl sm:h-full items-center justify-center relative mx-auto pt-10 sm:pt-20')}>

                <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
                    {/* {`Experience `} */}
                    <span className='inline-block py-3 leading-tight lg:text-7xl text-transparent bg-gradient-to-r from-primary via-blue-800 to-[#064073] bg-clip-text'>
                        {`Blogs`}
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400">
                    {`Search for everything you want to know about the web.`}
                </p>

                <div className="flex justify-center mt-6 space-x-6 text-sm sm:mt-10">
                    <Button type="button" onClick={()=>setIsOpen(true)} variant="outline" className="inline-flex w-full gap-2 rounded-full">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-foreground/20" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>
                        <span className="flex-auto mr-2 text-xs sm:text-sm">
                            {`Quick search...`}
                        </span>
                        <kbd className="font-sans font-semibold dark:text-slate-500">
                            <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K
                        </kbd>
                    </Button>
                    <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </Container>
        </div>
    );
}
