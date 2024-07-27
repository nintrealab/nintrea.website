"use client";

import { Container } from "@/components/container";
import { PostHeader } from "./post-header";
import { Footer } from "@/components/footer";
import { useParams } from "next/navigation";
import { viewport as dataViewport } from "@/data/meta";
import { GridBackground } from "../../(home)/background";
import Image from "next/image";
import { LOGO } from "@/data/assets";
export const viewport = dataViewport

export const Detail = () => {
    const { detail } = useParams()
    return (
        <>
            <GridBackground/>
            <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 pointer-events-none" style={{
                maskImage: "linear-gradient(to bottom, transparent, black)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black)"
            }}></div>
            <Container className={'max-w-4xl mx-auto px-3 sm:px-0'}>
                <PostHeader/>

                <p className="my-8 leading-7">
                    We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.
                </p>

                <div className="flex flex-col gap-0 my-8">
                    <h2 className="py-1 text-2xl font-semibold leading-7"> Simplified transition API </h2>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                </div>

                <div className="flex flex-col gap-0 my-8">
                    <h2 className="py-1 text-2xl font-semibold leading-7"> Simplified transition API </h2>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                </div>

                <div className="flex flex-col gap-0 my-8">
                    <h2 className="py-1 text-2xl font-semibold leading-7"> Simplified transition API </h2>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                    <p className="my-5">We’ve made transitions way easier in v2.1 by adding a new transition prop to all of the built-in components you might want to transition, and adding data attributes for each transition stage so you can add transition styles by just throwing some classes on the target element:</p>
                </div>

                <div className="flex flex-col gap-0 my-8">
                    <Image
                        src={LOGO.src}
                        width={500}
                        height={500}
                        alt="Picture of the author" className="object-cover w-full rounded-lg aspect-video justify-items-center"
                    />
                </div>

                <Footer/>
            </Container>
        </>
    );
}


export default Detail;