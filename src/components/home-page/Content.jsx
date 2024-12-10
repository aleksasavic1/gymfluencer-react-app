import React, { useState, useEffect } from 'react';
import "./Content.css";

function Content() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowParagraph(true);
        }, 3500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 4500);

        return () => clearTimeout(timer);
    }, []);

    return(
        <div id="content1">
            <h1 className="typing-text">Track Your Fitness Journey.</h1>
            <p className={showParagraph ? "show" : ""}>
                Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts,
                count reps, and track calories burned. Stay motivated and achieve your goals with our user-friendly 
                interface.
            </p>
            <button className={showButton ? "show" : ""}>Explore</button>
        </div>
    );
}

export default Content;