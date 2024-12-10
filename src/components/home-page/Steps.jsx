import { useInView } from "react-intersection-observer";
import "./StyleForSteps.css";


function Steps({img, title, text, ...props}) {
    const { ref, inView } = useInView({
        threshold: 0.75
    });

    return (
        <div className="style-for-steps" {...props} ref={ref}>
            <img src={img} alt="image" className={`image ${inView ? 'animate-left' : undefined}`} />
            <div className={`steps-div ${inView ? 'animate-right' : undefined}`}>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Steps;