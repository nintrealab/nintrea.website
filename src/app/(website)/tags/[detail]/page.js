"use client"
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Hero } from "./hero";
import { ContentBackground } from "../../blogs/(blogs)/content-background";
import { useParams } from "next/navigation";
import { viewport as dataViewport } from "@/data/meta";
import Image from "next/image";
import Animal from "@/assets/images/animal.webp"
import { Button } from "@headlessui/react";
import Link from "next/link";
export const viewport = dataViewport


export const Detail = () => {
    const { detail } = useParams()
    return (
        <>
            <ContentBackground/>
            <Hero/>

            <Container>
                <div className="inline-flex w-[94%] m-auto items-center justify-center gap-10 ">
                    <h1>Tags {'Sale'}</h1> <ul className="w-[80%] h-[1px] m-auto items-center  bg-gray-300 "></ul>
                    </div>
                
                <div className="w-[70%] gap-5 justify-center items-center m-auto">
                    <div className="grid grid-cols-3 gap-5">

                        <div className="grid grid-cols-1 p-6 shadow-sm shadow-gray-200 ring-1 ring-gray-300 hover:bg-gray-200/50 bg-gray-50 rounded-2xl ">
                            <Image className=" rounded-md " src={Animal} width={500} height={500}></Image>
                            <div>
                                <span className="mt-10 text-gray-600 text-sm">This Tags Created for all of you can share your experient and idea for next generation To develop code to easy AmmZemms.</span>
                                <Link className="flex flex-end text-sm text-bold" href="/tags/test-blogs"><span className="sr-only">See More...</span> </Link>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 p-6 shadow-sm shadow-gray-200 ring-1 ring-gray-300 hover:bg-gray-200/50 bg-gray-50 rounded-2xl ">
                            <Image className=" rounded-md " src={Animal} width={500} height={500}></Image>
                            <div>
                                <span className="mt-10 text-gray-600 text-sm">This Tags Created for all of you can share your experient and idea for next generation To develop code to easy AmmZemms.</span>
                                <Link className="flex flex-end text-sm text-bold" href="/tags/test-blogs"><span className="sr-only">See More...</span> </Link>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 p-6 shadow-sm shadow-gray-200 ring-1 ring-gray-300 hover:bg-gray-200/50 bg-gray-50 rounded-2xl ">
                            <Image className=" rounded-md " src={Animal} width={500} height={500}></Image>
                            <div>
                                <span className="mt-10 text-gray-600 text-sm">This Tags Created for all of you can share your experient and idea for next generation To develop code to easy AmmZemms.</span>
                                <Link className="flex flex-end text-sm text-bold" href="/tags/test-blogs">
                                <span className="relative text-xs bg-transparent rounded-2xl sm:text-sm">
                                    Read more<span className="sr-only">{"SDSDSK"}</span>
                                </span>
                                
                                
                                </Link>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}


export default Detail;