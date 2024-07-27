import Image from "next/image";
import Link from "next/link";
import Profle from "@/assets/images/profile.png"

export const PostHeader = () => {
    return (
        <>
            <div className="relative mt-24">
                <div>
                    <div>Monday, July 1st 2014</div>
                    <h1 className="mt-5 text-2xl font-bold">
                        Headless UI v2.1: Simplified transition API and improved multi-dialog support
                    </h1>
                    <div className="flex items-center mt-5">
                        <Image
                            src={Profle.src}
                            width={500}
                            height={500}
                            alt="Picture of the author" className="object-cover rounded-full w-14 h-14"
                        />
                        <div className="ml-5">
                            <p className="font-semibold leading-6">CHHEM Sithuch</p>
                            <Link href="#" className="text-sky-500">@chhemsithuch</Link>
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