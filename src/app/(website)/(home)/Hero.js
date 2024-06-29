import { Container } from "@/components/container";
import { GridBackground } from "./background";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <div className='w-full h-[35rem]'>
            <GridBackground/>
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5" style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
            }}></div>
            <Container className={cn('flex flex-col w-full max-w-5xl h-full items-center justify-center relative mx-auto pt-20 sm:pt-20')}>
                <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
                    {`Sharing knowledge and`}
                    <span className='inline-block text-transparent bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text'>
                        {`experience`}
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400">
                    {`Compiled with various documents to support the study of students or those who like to research documents on the Internet.`}
                </p>
                <div className="flex justify-center mt-6 space-x-6 text-sm sm:mt-10">
                    <a href="/" className="flex items-center justify-center w-full h-12 px-6 font-semibold text-white rounded-lg bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400">
                        {`Learn more`}
                    </a>
                    <button type="button" className="items-center hidden h-12 px-4 space-x-3 text-left bg-white rounded-lg shadow-sm sm:flex w-72 ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                            <path d="m19 19-3.5-3.5"></path>
                            <circle cx="11" cy="11" r="6"></circle>
                        </svg>
                        <span className="flex-auto">
                            {`Quick search...`}
                        </span>
                        <kbd className="font-sans font-semibold dark:text-slate-500">
                        <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
                    </button>
                </div>
            </Container>
        </div>
    );
}