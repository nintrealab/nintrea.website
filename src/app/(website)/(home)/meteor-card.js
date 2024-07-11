import React from "react";
import { Meteors } from "@/components/meteors";

export function MeteorsCard() {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] opacity-50 dark:opacity-30 bg-red-500 rounded-full blur-3xl" />
            <div className="relative flex flex-col items-start justify-end h-full px-4 py-8 overflow-hidden dark:border dark:shadow-xl border-border hover:bg-card/80 bg-card rounded-2xl">
                <div className="flex items-center justify-center w-5 h-5 mb-4 border border-gray-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-2 h-2 text-gray-300" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"/>
                    </svg>
                </div>

                <h1 className="relative z-50 mb-4 text-xl font-bold text-foreground/80">
                    Meteors because they&apos;re cool
                </h1>

                <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                    I don&apos;t know what to write so I&apos;ll just paste something
                    cool here. One more sentence because lorem ipsum is just
                    unacceptable. Won&apos;t ChatGPT the shit out of this.
                </p>

                <button className="px-4 py-1 border rounded-lg border-foreground/10 text-foreground/80">
                    Explore
                </button>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
            </div>
        </div>
    );
}
