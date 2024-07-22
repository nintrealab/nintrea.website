import { Container } from "@/components/container";
import { GridBackground } from "../../(home)/background";
import { cn } from "@/lib/utils";

export const Hero = () => {
    return (
        <div className='w-full max-h-[20rem]'>
            <GridBackground/>
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 pointer-events-none" style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
            }}></div>
            <Container className={cn('flex flex-col w-full gap-2 max-w-5xl h-full items-center justify-center relative mx-auto pt-20 sm:pt-20')}>

                <h1 className='text-4xl font-extrabold tracking-tight text-center text-slate-900 sm:text-5xl lg:text-6xl dark:text-white'>
                    {/* {`Authors`} */}
                    <span className='inline-block text-transparent uppercase lg:text-6xl bg-gradient-to-r from-primary via-pink-500 to-primary bg-clip-text'>
                        {`Authors`}
                    </span>
                </h1>
                <p className="max-w-3xl mx-auto mt-6 text-lg text-center text-slate-600 dark:text-slate-400">
                    {`We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.`}
                </p>
            </Container>
        </div>
    );
}
