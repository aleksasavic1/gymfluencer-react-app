import { useState } from "react";

import classes from "./ContactUsForm.module.css";
import contactUsImage from "../../assets/contactusImg.png";

function ContactUsForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(undefined);

    

    function checkForm(e) {
        e.preventDefault();

        let errors = {};
        let isFormValid = true;

        if(name.trim().length < 2) {
            errors.name = "Name must be at least 2 characters long.";
            isFormValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(email)) {
            errors.email = "Please enter a valid email address.";
            isFormValid = false;
        }

        if(message.trim().length < 5) {
            errors.message = "Message must be at least 5 characters long.";
            isFormValid = false;
        }

        setErrors(errors);
        setIsValid(isFormValid);

        return isFormValid;
    }

    
    

    return (
        <section className={classes.section}>
            <div className={classes.div}>
                <h1 className={classes.h1}>Contact Us</h1>

                <input type="text" className={`${classes.input} ${classes.name}`} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <p className={classes.error}>{errors.name}</p>}

                <input type="email" className={`${classes.input} ${classes.email}`} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className={classes.error}>{errors.email}</p>}

                <textarea className={classes.input} id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                {errors.message && <p className={classes.error}>{errors.message}</p>}

                <input type="submit" className={classes.submit} value="Submit" onClick={checkForm} />
                {isValid && <p className={classes.sent}>Sent!</p>}
            </div>
            <img src={contactUsImage} alt="Contact Us Image" className={classes.img} />
        </section>
    );
}

export default ContactUsForm;