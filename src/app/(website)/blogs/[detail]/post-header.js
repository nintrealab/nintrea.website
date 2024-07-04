import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PostHeader = ({
    reverse = "false",
    className,
    style = {
        "--width": "200px",
        "--height": "200px",
        "--quantity": "-4",
        "--paused": "paused"
    },
    data = []
}) => {
    return (
        <div className={cn("slider", className)} reverse={reverse} style={style}>
            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-65rem))]">
                <div className="">
                    <div>Monday, July 1st 2014</div>
                    <h1 className="text-2xl font-bold mt-5">Headless UI v2.0 for React</h1>
                    <div className="flex mt-5">
                        {/* { data.map((item, index) =>{
                            return(
                                <div key={index} className="rounded-full bg-gray-300 w-16 h-16" style={{ "--position": index + 1 }}>
                                    <Image src={item.src} alt={item.title} width={38} height={38} className="rounded-full" style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}/>
                                </div>
                            )
                        })} */}
                        <div className="rounded-full bg-gray-300 w-16 h-16">
                            {/* <Image 

                            /> */}
                        </div>
                        <div className="mt-2 ml-10">
                            <p>Hello</p>
                            <Link href="/" className="text-sky-500">@Hello</Link>
                        </div>
                    </div>
                    <Image
                        src="/assets/images/android-chrome-512x512.png"
                        width={500}
                        height={500}
                        alt="Picture"
                    />
                </div>
            </div>
        </div>
    );
}