import { cn } from "@/lib/utils"
import Image from "next/image"

export const CardSlider = ({
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
    return(
        <div className={cn("slider", className)} reverse={reverse} style={style}>
            <div className="list">
                { data.map((item, index) => {
                    return(
                        <div className="px-4 py-5 border rounded-lg bg-background border-primary/10 sm:px-6 item" style={{ "--position": index + 1 }}>
                            <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                    <Image src={item.src} alt={item.title} width={38} height={38} className="rounded-full" style={{
                                        width: "100%",
                                        height: "auto",
                                        objectFit: "cover",
                                    }}/>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900">
                                        <a href="#" className="hover:underline">{item.title}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <a href="#" className="hover:underline">{item.joined}</a>
                                    </p>
                                </div>
                            </div>
                            <div className="pt-3">
                                <p className="text-sm text-gray-500 line-clamp-3">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}