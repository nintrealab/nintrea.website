import Image from "next/image"

export const ImageSlider = ({
    reverse = "false",
    style = {
        "--width": "200px",
        "--height": "200px",
        "--quantity": "9",
        "--paused": "paused"
    },
    data = []
}) => {
    return(
        <div className="slider" reverse={reverse} style={style}>
            <div className="list">
                { data.map((item, index) => {
                    return(
                        <div key={index} className="item" style={{ "--position": index + 1 }}>
                            <Image
                                loading="lazy"
                                src={item.src}
                                alt={item.alt ?? `Image ${index + 1}`}
                                width={225}
                                height={225}
                                className="rounded-2xl"
                                style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                            }}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}