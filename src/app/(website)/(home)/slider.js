import Slide1 from "@/assets/images/slides/slider2_1.png";
import Slide2 from "@/assets/images/slides/slider2_2.png";
import Slide3 from "@/assets/images/slides/slider2_3.png";
import Slide4 from "@/assets/images/slides/slider2_4.png";
import Slide5 from "@/assets/images/slides/slider2_5.png";
import Slide6 from "@/assets/images/slides/slider2_6.png";
import Slide7 from "@/assets/images/slides/slider2_7.png";
import Slide8 from "@/assets/images/slides/slider2_8.png";
import Slide9 from "@/assets/images/slides/slider2_9.png";

export const Slider = () => {
    return (
        <div className="slider" reverse="true" style={{
            "--width": "200px",
            "--height": "200px",
            "--quantity": "9"
        }}>
            <div className="list">
                <div className="item" style={{ "--position":"1" }}><img src={Slide1.src} alt=""/></div>
                <div className="item" style={{ "--position":"2" }}><img src={Slide2.src} alt=""/></div>
                <div className="item" style={{ "--position":"3" }}><img src={Slide3.src} alt=""/></div>
                <div className="item" style={{ "--position":"4" }}><img src={Slide4.src} alt=""/></div>
                <div className="item" style={{ "--position":"5" }}><img src={Slide5.src} alt=""/></div>
                <div className="item" style={{ "--position":"6" }}><img src={Slide6.src} alt=""/></div>
                <div className="item" style={{ "--position":"7" }}><img src={Slide7.src} alt=""/></div>
                <div className="item" style={{ "--position":"8" }}><img src={Slide8.src} alt=""/></div>
                <div className="item" style={{ "--position":"9" }}><img src={Slide9.src} alt=""/></div>
            </div>
        </div>
    )
}