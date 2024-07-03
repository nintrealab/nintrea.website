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
                    alt="Picture of the author" className="rounded-full w-10 h-10 object-cover"
                />
                <div className="flex flex-col">
                    <h4 className="text-xs font-bold text-gray-600 mx-3 " >@CHHEM Sithuch </h4>
                    <Link href="#" className="text-primary text-xs mx-3 hover:underline ">@CHHEM Sithuch</Link>
                </div>
            </div>
        </Container>

    )
}

