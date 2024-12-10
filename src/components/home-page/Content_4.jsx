import Steps from "./Steps.jsx";
import countingImg from '../../assets/counting-image.png';
import "./content_4.css";

function Content_4() {
    return (
        <Steps id="content4"
        img={countingImg} 
        title="Step 3: Count Your Reps"
        text="Count your reps with percision, ensuring every detail is logged. Stay informed on your progress." />
    );
}

export default Content_4;