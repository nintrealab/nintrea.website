import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from 'date-fns';
import { Skeleton } from "@/components/skeleton";

export const LoadingArticles = () => {

    return (
        <article className="relative group">
            <div className="flex items-start w-full h-full gap-5 space-y-3">
                <Skeleton className="w-[10rem] h-[8rem] rounded-xl shrink-0" />
                <div className="w-full space-y-2 -translate-y-2">
                    <Skeleton className="w-32 h-3" />
                    <Skeleton className="w-[70%] h-4" />
                    <Skeleton className="w-[80%] h-3" />
                    <Skeleton className="w-20 h-3" />
                </div>
            </div>

            <dl className="absolute left-[9.2rem] sm:left-[12.2rem] -top-1 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                <dt className="sr-only">
                    <Skeleton className="w-20 h-3" />
                </dt>
                <dd className="text-xs leading-6 sm:text-sm whitespace-nowrap dark:text-slate-400">
                    <Skeleton className="w-20 h-3" />
                </dd>
            </dl>
        </article>
    )
}

export const Articles = ({ data }) => {

    const stringDate = data?.meta?.createdAt
    const date = parseISO(stringDate)

    return (
        <article className="relative group">
            <div className="relative flex items-start justify-start gap-5">
                <div className="h-full shrink-0">
                    <Image
                        loading="lazy"
                        src={data?.thumbnail}
                        alt="Avatar"
                        className="object-cover w-32 h-20 rounded-md sm:h-32 sm:w-44"
                        width={5120}
                        height={5120}
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                          objectFit: 'cover', // cover, contain, none
                        }}
                    />
                </div>
                <div className="relative w-full">
                    <h2 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0">
                        {data?.title}
                    </h2>
                    <p className="mt-2 mb-3 line-clamp-3">
                        {data?.description}
                    </p>
                    <Link className="flex items-center text-sm font-medium text-sky-500" href="/">
                        <span className="relative text-xs sm:text-sm">
                            Read more<span className="sr-only" href="/">{data?.title}</span>
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
                    <time dateTime={stringDate}>{format(date, 'LLLL d, yyyy')}</time>
                </dd>
            </dl>
        </article>
    )
}


export const LoadingArticle = ({ data }) => {
    return (
        <article className="flex flex-col col-span-1 gap-0 pb-5 divide-gray-200 rounded-xl text-centerdivide-y">
            <div className="w-full p-5 pb-2.5">
                <Skeleton className="w-full aspect-[5/3] rounded-xl shrink-0 mt-2" />
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full p-5 py-2.5">
                <Skeleton className="w-16 h-2 mt-1 rounded-xl shrink-0" />
                <Skeleton className="w-[95%] h-4 rounded-xl shrink-0 mt-2" />
                <Skeleton className="w-full h-3 rounded-xl shrink-0" />
                <Skeleton className="w-[90%] h-3 rounded-xl shrink-0" />
                <Skeleton className="w-20 h-3 rounded-xl shrink-0" />
            </div>
        </article>
    )
}

export const Article = ({ data }) => {

    const stringDate = data?.meta?.createdAt
    const date = parseISO(stringDate)

    return (
        <article className="flex flex-row col-span-1 gap-0 transition-all divide-gray-200 rounded-2xl sm:flex-col hover:ring-1 text-centerdivide-y hover:bg-card/50 ring-card drop-shadow-2xl">
            <div className="p-3 sm:pb-2.5 sm:pt-7 flex-shrink-0 sm:px-5">
                <Image
                    width={250}
                    height={250}
                    loading="lazy"
                    className="flex-shrink-0 object-cover bg-red-300 w-32 sm:w-full aspect-[4/2.5] sm:aspect-[5/3] sm:mx-auto rounded-lg"
                    src={data?.thumbnail}
                    decoding="async"
                    data-nimg="1"
                    alt={data?.description}
                />
            </div>
            <div className="flex flex-col items-start justify-start w-full pl-2 pt-3 p-5 py-2.5 sm:pb-7 sm:px-5">
                <time dateTime={stringDate} className="text-xs text-foreground/90">{format(date, 'LLLL d, yyyy')}</time>
                <h2 className="text-sm font-medium tracking-tight line-clamp-1 sm:font-semibold md:line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0">
                    {data?.title}
                </h2>

                <p className="mt-2 text-xs sm:mb-3 sm:text-base line-clamp-2">
                    {data?.description}
                </p>
                <div className="items-center justify-between hidden w-full text-right sm:flex">
                    <Link className="flex items-center text-[10px] sm:font-medium sm:text-sm from-left text-primary" href="/blogs/title-blogs">
                        <span className="relative text-xs bg-transparent rounded-2xl sm:text-sm">
                            Read more<span className="sr-only">{data?.title}</span>
                        </span>
                        <svg className="relative mt-px overflow-visible ml-2.5 text-primary/90 dark:text-primary" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M0 0L3 3L0 6"></path>
                        </svg>
                    </Link>
                </div>

                <Link className="absolute inset-0 bg-transparent sm:hidden" href="/blogs/title-blogs">
                    <span className="sr-only">{data?.title}</span>
                </Link>
            </div>
        </article>
    )
}