import React, { useEffect, useState } from 'react';

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Content from "../components/home-page/content.jsx";
import Content_2 from '../components/home-page/Content_2.jsx';
import Content_3 from '../components/home-page/Content_3.jsx';
import Content_4 from '../components/home-page/Content_4.jsx';
import LastContent from '../components/home-page/LastContent.jsx';

function HomePage() {
    const [currentContent, setCurrentContent] = useState(0);
    const contentIDs = ['content1', 'content2', 'content3', 'content4', 'content5'];

    useEffect(() => {
        document.title = "Home";
    }, []);

    const handleWheel = (e) => {
        if (e.deltaY > 0) {
          if (currentContent < contentIDs.length - 1) {
            setCurrentContent(currentContent + 1);
          }
        } else {
          if (currentContent > 0) {
            setCurrentContent(currentContent - 1);
          }
        }
    };

    useEffect(() => {
        const content = document.getElementById(contentIDs[currentContent]);
        if(content) {
          content.scrollIntoView({ behavior: "smooth" });
        }
    }, [currentContent]);

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: true });
    
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
    }, [currentContent]);

    return (
        <>
            <Header />
            <Content />
            <Content_2 />
            <Content_3 />
            <Content_4 />
            <LastContent />
            <Footer />
        </>
    );
}

export default HomePage;