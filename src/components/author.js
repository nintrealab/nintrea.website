import { Container } from "@/components/container"
import Image from "next/image"
import Profle from "@/assets/images/profile.png"
import Link from "next/link"

export const Author =()=>{
    return(
        <Container>
            <div className="flex">
                <Image
                    src={Profle.src}
                    width={500}
                    height={500}
                    alt="Picture of the author" className="object-cover w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                    <h4 className="mx-3 text-xs font-bold text-gray-600 " >@CHHEM Sithuch </h4>
                    <Link href="#" className="mx-3 text-xs text-primary hover:underline ">@CHHEM Sithuch</Link>
                </div>
            </div>
        </Container>

    )
}

