import Image from "next/image"

export const Slider = ({
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
                        <div className="item" style={{ "--position": index + 1 }}>
                            <Image loading="lazy" src={item.src} alt={item.alt} width={225} height={225} style={{
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