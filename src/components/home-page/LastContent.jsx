import { useState, useEffect } from 'react';
import "./LastContent.css";


function LastContent() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prevIndex => (prevIndex + 1) % 3);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    const getColor = (index) => {
        return active === index ? 'blue' : 'red';
    };

    return(
        <div id="content5">
            <div id="circle1" style={{backgroundColor: getColor(0)}}>Consistency</div>
            <div id="circle2" style={{backgroundColor: getColor(1)}}>Progressive Overload</div>
            <div id="circle3" style={{backgroundColor: getColor(2)}}>Rest and Recovery</div>
        </div>
    );
}


export default LastContent;