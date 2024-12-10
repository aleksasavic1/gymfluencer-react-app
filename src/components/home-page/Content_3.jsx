import "./Content_3.css";
import Steps from "./Steps.jsx";
import content2Image from "../../assets/content2_image.webp";

function Content_3() {
    return (
        <Steps id="content3"
        img={content2Image} 
        title="Step 2: Log Your Exercises"
        text="Easily log your exercises by selecting from a wide range of activities. 
            Track your progress with detailed logs." />
    );
}

export default Content_3;