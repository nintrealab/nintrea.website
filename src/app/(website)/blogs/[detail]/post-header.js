import Image from "next/image";
import Link from "next/link";
import Profle from "@/assets/images/profile.png"

export const PostHeader = () => {
    return (
        <>
            <div className="relative mt-5 sm:mt-24">
                <div>
                    <div>Monday, July 1st 2014</div>
                    <h1 className="mt-2 text-xl font-bold sm:mt-5 sm:text-2xl">
                        Headless UI v2.1: Simplified transition API and improved multi-dialog support
                    </h1>
                    <div className="flex items-center w-full mt-5">
                        <Image
                            src={Profle.src}
                            width={500}
                            height={500}
                            alt="Picture of the author" className="object-cover rounded-full w-9 aspect-square sm:w-12"
                        />
                        <div className="ml-2 sm:ml-5">
                            <p className="font-semibold leading-5 sm:leading-6">CHHEM Sithuch</p>
                            <Link href="#" className="text-sm leading-4 line-clamp-1 sm:text-base text-sky-500">@chhemsithuch</Link>
                        </div>
                    </div>
                    <div className="mt-5">
                        <Image
                            src={Profle.src}
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