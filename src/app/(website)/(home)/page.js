
import { Container } from "@/components/container";
import { Header } from "../../../components/header";
import { defaultMeta } from "@/data/meta";
import { Footer } from "../../../components/Footer";

export const metadata = defaultMeta;
import { ImageSlider } from "@/components/image-slider";
import { Hero } from "./hero";
import Slide1 from "@/assets/images/slides/slider2_1.png";
import Slide2 from "@/assets/images/slides/slider2_2.png";
import Slide3 from "@/assets/images/slides/slider2_3.png";
import Slide4 from "@/assets/images/slides/slider2_4.png";
import Slide5 from "@/assets/images/slides/slider2_5.png";
import Slide6 from "@/assets/images/slides/slider2_6.png";
import Slide7 from "@/assets/images/slides/slider2_7.png";
import Slide8 from "@/assets/images/slides/slider2_8.png";
import Slide9 from "@/assets/images/slides/slider2_9.png";
import { CardSlider } from "@/components/card-slider";
import Image from "next/image";
import Link from "next/link";
// import { PostHeader } from "@/components/post-header";

export default function Home() {

    return (
        <>
            <Header/>
            <Hero/>

            <Container>
                <div className="flex flex-col items-center justify-center gap-4 animate-fade-in">
                    {/* <ImageSlider data={data} reverse={'true'} style={{
                        "--width": "200px",
                        "--height": "200px",
                        "--quantity": "-7",
                        "--paused": "running"
                    }}/> */}
                {/* <PostHeader /> */}
                    <CardSlider
                        className={'hidden xl:block'}
                        data={[
                            {
                                src: "https://github.com/pphatdev.png",
                                title: "LEAT Sophat",
                                joined: "January 23 2020",
                                description: "Thoughts from a wandering mind. I am the senior front-end developer of @turbotechlabs , and an UI/UX designer."
                            },
                            {
                                src: "https://github.com/SVA-bundittt.png",
                                title: "HOL Bundit",
                                joined: "January 23 2020",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                            {
                                src: "https://github.com/sithuch.png",
                                title: "CHHEM Sithuch",
                                joined: "Jun 24 2024",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                            {
                                src: "https://github.com/vyniivaa-dev.png",
                                title: "MEAN Navy",
                                joined: "Jun 24 2024",
                                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est."
                            },
                        ]}
                        reverse={'false'}
                        style={{
                            "--width": "390px",
                            "--height": "200px",
                            "--quantity": "-4",
                            "--paused": "paused",
                            "--speed": "20s"
                        }}
                    />

                </div>
                <div className="w-full pt-10">

                    <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-65rem))]">
                        <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"> </div>
                        <div className="space-y-16">

                            <article className="relative group">
                                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-4 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                                    <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                                    <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle>
                                </svg>
                                <div className="relative flex items-start justify-start gap-5">
                                    <div className="h-full shrink-0">
                                        <Image src={"https://github.com/sithuch.png"} alt="Avatar" className="object-cover w-32 h-20 rounded-md sm:h-32 sm:w-44" width={100} height={100} />
                                    </div>
                                    <div className="relative w-full">
                                        <h3 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0"> Headless UI v2.1: Simplified transition API and improved multi-dialog support</h3>
                                        <p className="hidden mt-2 mb-3 sm:block line-clamp-2">
                                            We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.
                                        </p>
                                        <Link className="flex items-center text-sm font-medium text-sky-500" href="/">
                                            <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                                            <span className="relative text-xs sm:text-sm">
                                                Read more<span className="sr-only">, Headless UI v2.1: Simplified transition API and improved multi-dialog support</span>
                                            </span>
                                            <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M0 0L3 3L0 6"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <dl className="absolute left-[9.2rem] sm:left-[12.2rem] -top-1 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="text-xs leading-6 sm:text-sm whitespace-nowrap dark:text-slate-400">
                                        <time dateTime="2024-06-21T15:00:00.000Z">June 21, 2024</time>
                                    </dd>
                                </dl>
                            </article>

                            <article className="relative group">
                                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-4 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                                    <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                                    <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle>
                                </svg>
                                <div className="relative flex items-start justify-start gap-5">
                                    <div className="h-full shrink-0">
                                        <Image src={"https://github.com/sithuch.png"} alt="Avatar" className="object-cover w-32 h-20 rounded-md sm:h-32 sm:w-44" width={100} height={100} />
                                    </div>
                                    <div className="relative w-full">
                                        <h3 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0"> Headless UI v2.1: Simplified transition API and improved multi-dialog support</h3>
                                        <p className="hidden mt-2 mb-3 sm:block line-clamp-2">
                                            We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.
                                        </p>
                                        <Link className="flex items-center text-sm font-medium text-sky-500" href="/">
                                            <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                                            <span className="relative text-xs sm:text-sm">
                                                Read more<span className="sr-only">, Headless UI v2.1: Simplified transition API and improved multi-dialog support</span>
                                            </span>
                                            <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M0 0L3 3L0 6"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <dl className="absolute left-[9.2rem] sm:left-[12.2rem] -top-1 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="text-xs leading-6 sm:text-sm whitespace-nowrap dark:text-slate-400">
                                        <time dateTime="2024-06-21T15:00:00.000Z">June 21, 2024</time>
                                    </dd>
                                </dl>
                            </article>

                            <article className="relative group">
                                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-4 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                                    <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                                    <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle>
                                </svg>
                                <div className="relative flex items-start justify-start gap-5">
                                    <div className="h-full shrink-0">
                                        <Image src={"https://github.com/sithuch.png"} alt="Avatar" className="object-cover w-32 h-20 rounded-md sm:h-32 sm:w-44" width={100} height={100} />
                                    </div>
                                    <div className="relative w-full">
                                        <h3 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0"> Headless UI v2.1: Simplified transition API and improved multi-dialog support</h3>
                                        <p className="hidden mt-2 mb-3 sm:block line-clamp-2">
                                            We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.
                                        </p>
                                        <Link className="flex items-center text-sm font-medium text-sky-500" href="/">
                                            <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                                            <span className="relative text-xs sm:text-sm">
                                                Read more<span className="sr-only">, Headless UI v2.1: Simplified transition API and improved multi-dialog support</span>
                                            </span>
                                            <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M0 0L3 3L0 6"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <dl className="absolute left-[9.2rem] sm:left-[12.2rem] -top-1 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="text-xs leading-6 sm:text-sm whitespace-nowrap dark:text-slate-400">
                                        <time dateTime="2024-06-21T15:00:00.000Z">June 21, 2024</time>
                                    </dd>
                                </dl>
                            </article>

                            <article className="relative group">
                                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-4 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                                    <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                                    <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle>
                                </svg>
                                <div className="relative flex items-start justify-start gap-5">
                                    <div className="h-full shrink-0">
                                        <Image src={"https://github.com/sithuch.png"} alt="Avatar" className="object-cover w-32 h-20 rounded-md sm:h-32 sm:w-44" width={100} height={100} />
                                    </div>
                                    <div className="relative w-full">
                                        <h3 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0"> Headless UI v2.1: Simplified transition API and improved multi-dialog support</h3>
                                        <p className="hidden mt-2 mb-3 sm:block line-clamp-2">
                                            We just released Headless UI v2.1 for React, which dramatically simplifies our transition APIs and adds support for rendering multiple dialogs as siblings.
                                        </p>
                                        <Link className="flex items-center text-sm font-medium text-sky-500" href="/">
                                            <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                                            <span className="relative text-xs sm:text-sm">
                                                Read more<span className="sr-only">, Headless UI v2.1: Simplified transition API and improved multi-dialog support</span>
                                            </span>
                                            <svg className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M0 0L3 3L0 6"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <dl className="absolute left-[9.2rem] sm:left-[12.2rem] -top-1 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                                    <dt className="sr-only">Date</dt>
                                    <dd className="text-xs leading-6 sm:text-sm whitespace-nowrap dark:text-slate-400">
                                        <time dateTime="2024-06-21T15:00:00.000Z">June 21, 2024</time>
                                    </dd>
                                </dl>
                            </article>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Container>
        </>
    );
}
