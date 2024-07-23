import Image from "next/image"

export const Avatar = ({src, alt}) => {
    return(
        <div className="relative h-16 rounded-full bg-primary aspect-square">
            <Image src={src}  width={100} height={100} alt={alt} fill className="absolute inset-0 object-cover w-full h-full rounded-full opacity-50 dark:opacity-30 blur-md brightness-200" />
            <div className="absolute rounded-full inset-0.5">
                <Image
                    src={src}
                    width={200}
                    height={200}
                    alt=""
                    className="object-cover w-full h-full rounded-full"
                />
            </div>
        </div>
    )
}