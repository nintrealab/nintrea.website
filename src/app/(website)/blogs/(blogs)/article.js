import Image from "next/image"
import Link from "next/link"
import { parseISO, format } from 'date-fns';
import { Skeleton } from "@/components/skeleton";

export const LoadingArticle = () => {

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

export const Article = ({ data }) => {

    const stringDate = data?.meta?.createdAt
    const date = parseISO(stringDate)

    return (
        <article className="relative group">
            <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-4 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block">
                <circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle>
            </svg>
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
                    <h3 className="pt-5 text-base font-semibold tracking-tight line-clamp-2 sm:line-clamp-1 text-slate-900 dark:text-slate-200 lg:pt-0">
                        {data?.title}
                    </h3>
                    <p className="mt-2 mb-3 line-clamp-3">
                        {data?.description}
                    </p>
                    <Link className="flex items-center text-sm font-medium text-sky-500" href="/post-header">
                        <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
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