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
            <Container className={cn('flex flex-col w-full gap-2 max-w-5xl h-full items-center justify-center relative mx-auto pt-20 sm:pt-20')}>
                <a className="inline-flex items-center px-3 py-1 text-sm font-medium -translate-y-5 rounded-lg bg-muted" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                    </svg>
                    <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
                    <span>Introducing Lift Mode</span>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1">
                        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                </a>
                <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
                    {`Sharing knowledge and`}
                    <span className='inline-block lg:text-7xl text-transparent bg-gradient-to-r from-primary via-green-500 to-[#064073] bg-clip-text'>
                        {` experience`}
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
