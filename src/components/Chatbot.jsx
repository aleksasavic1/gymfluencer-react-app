import { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    function handleClose() {
        setIsVisible(false);
    }

    return (
        isVisible && (
            <div className="container">
                <div className="close-button" onClick={handleClose}>X</div>
                <div className="chatbot-icon">
                    
                </div>
            </div>
        )
    );
}

export default Chatbot;