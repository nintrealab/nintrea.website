// import Image from "next/image";
import Link from "next/link";
export const PostHeader = () => {
    return (
        <>
            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-65rem))]">
                <div className="">
                    <div>Monday, July 1st 2014</div>
                    <h1 className="text-2xl font-bold mt-5">Headless UI v2.0 for React</h1>
                    <div className="flex mt-5">
                        <div className="rounded-full bg-gray-300 w-16 h-16"></div>
                        <div className="mt-2 ml-10">
                            <p>Hello</p>
                            <Link href="/" className="text-sky-500">@Hello</Link>
                            {/* <Image></Image> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}