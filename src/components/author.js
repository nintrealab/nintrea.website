import { Container } from "@/components/container"
import Image from "next/image"
import Profle from "@/assets/images/profile.png"

export const Author =()=>{
    return(
        <Container>
            <div>
            <Image
                src={Profle.src}
                width={500}
                height={500}
                alt="Picture of the author"
            />
            </div>
        </Container>

    )
}

