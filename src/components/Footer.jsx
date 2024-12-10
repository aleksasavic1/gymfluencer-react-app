import "./Footer.css";

function Footer() {
    return(
        <footer>
            <div className="top-footer">
                <img src="/favicon.png" alt="gym-favicon" />

                <div className="footer-content">
                    <div className="left-side">
                        <div>
                            <h2>GymFluencer</h2>
                            <p>Your Fitness Journey Starts Here</p>
                        </div>

                        <div>
                            <h2>FitForce</h2>
                            <p>Empowering Every Workout</p>
                        </div>

                        <div>
                            <h2>FitVision</h2>
                            <p>Inspiring Health, Empowering Change</p>
                        </div>
                    </div>

                    <div className="company">
                        <h2>Company</h2>

                        <ul>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Open Source</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>

                    <div className="services">
                        <h2>Services</h2>

                        <ul className="services-ul">
                            <div className="first-service">
                                <li><a href="#">Personalized Training</a></li>
                                <li><a href="#">Nutrition Advice</a></li>
                                <li><a href="#">Online Workouts</a></li>
                                <li><a href="#">Group Classes</a></li>
                                <li><a href="#">Health & Wellness Tips</a></li>
                                <li><a href="#">Beginner Fitness Programs</a></li>
                                <li><a href="#">Personal Trainers</a></li>
                                <li><a href="#">Recovery Assistance</a></li>
                            </div>
                            
                            <div>
                                <li><a href="#">Strength Training</a></li>
                                <li><a href="#">Weight Loss Programs</a></li>
                                <li><a href="#">Fitness Equipment</a></li>
                                <li><a href="#">Online Community</a></li>
                                <li><a href="#">Cardio Training</a></li>
                                <li><a href="#">Membership Packages</a></li>
                                <li><a href="#">Try for Free</a></li>
                                <li><a href="#">Blog & News</a></li>
                            </div>
                        </ul>
                    </div>

                    <div className="contacts">
                        <h2>Contacts</h2>

                        <div>
                            <p>+381 060 123 4567</p>
                            <p>Serbia, Belgrade, 101801</p>
                        </div>

                        <div>
                            <h3>Inquires</h3>
                            <p>mail@random-mail.com</p>
                        </div>

                        <div>
                            <h3>Careers</h3>
                            <p>dream@rand-mail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="bottom-footer">
                <h4>&copy; GymFluencer. All rights reserved</h4>
                <div className="social-networks">
                    <a href="#">
                        <img src="/instagram-logo.webp" alt="Instagram Logo" />
                        <img src="/facebook-logo.webp" alt="Facebook Logo" />
                        <img src="/twitter-logo.png" alt="Twitter Logo" />
                        <img src="/linkedin-logo.png" alt="LinkedIn Logo" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;