import { useEffect } from "react";

import Header from "../components/Header";
import ContactUsForm from "../components/contactus-page/ContactUsForm";
import Footer from "../components/Footer";

function ContactUs() {
    useEffect(() => {
        document.title = "Contact";
    }, []);

    return(
        <>
            <Header />
            <ContactUsForm />
            <Footer />
        </>
    );
}

export default ContactUs;