import { BreadcrumbPost } from "@/lib/code/breadcrumb";
import Image from "next/image";
import Link from "next/link";

export const PostHeader = ({ data }) => {

    return (
        <>
            <div className="relative mt-5 sm:mt-24">
                <div>
                    {/* <BreadcrumbPost breadcrumbs={data?.breadcrumbs || []}/> */}
                    <ul className="flex items-center justify-start w-full gap-4 mt-3">
                        {data?.breadcrumbs?.map((tag, key) => {
                            return <li key={key} >
                                <Link href="#" className="relative text-sm cursor-pointer text-primary">
                                    {tag}
                                    <span className="absolute inset-0 -left-1 w-[calc(100%_+1rem)] h-[calc(100%_+0.5rem)] -m-1 transition-all rounded-md hover:bg-foreground/10"></span>
                                </Link>
                            </li>
                        })}
                    </ul>
                    {/* Date */}
                    <p date={data?.date}>{data?.date}</p>

                    {/* Tags */}
                    <ul className="flex items-center justify-start w-full gap-4 mt-3">
                        {data?.tags?.map((tag, key) => {
                            return <li key={key} >
                                <Link href="#" className="relative text-sm cursor-pointer text-primary">
                                    {tag}
                                    <span className="absolute inset-0 -left-1 w-[calc(100%_+1rem)] h-[calc(100%_+0.5rem)] -m-1 transition-all rounded-md hover:bg-foreground/10"></span>
                                </Link>
                            </li>
                        })}
                    </ul>
                    <h1 className="mt-2 text-xl font-bold sm:mt-5 sm:text-2xl">
                        {data?.title}
                    </h1>

                    <div className="flex items-center justify-start w-full gap-6">
                        {data?.authors?.map((author, key) => {
                            return (
                                <div className="flex items-center mt-5" key={key}>
                                    <Image
                                        src={author.avatar}
                                        width={500}
                                        height={500}
                                        alt="Picture of the author" className="object-cover rounded-full w-9 aspect-square sm:w-12"
                                    />
                                    <div className="ml-2 sm:ml-4">
                                        <p className="font-semibold leading-5 sm:leading-6">{ author?.title }</p>
                                        <Link href="#" className="text-sm leading-4 line-clamp-1 sm:text-base text-sky-500">{`@`}{ author?.username }</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="mt-5">
                        <Image
                            src={data.coverImage}
                            width={500}
                            height={500}
                            alt="Picture of the author" className="object-cover w-full rounded-xl aspect-video justify-items-center"
                        />
                    </div>
                </div>

            </div>
        </>
    );
}