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
                    <h4 className="text-xs font-bold text-transparent bg-gradient-to-r from-primary via-sky-500 to-[#064073] bg-clip-text mx-1">CHHEM Sithuch </h4>
                    <Link href="#" className="  text-xs mx-1 hover:text-sky-300 text-transparent bg-gradient-to-r from-primary via-sky-500 to-[#064073] bg-clip-text">@Sithuch</Link>
                </div>
            </div>
        </Container>

    )
}

