import "./Header.css";

function Header() {
    return(
        <header>
            <img src="/menu.png" alt="menu" id="menu" />
            <h1><a href="/">GymFluencer</a></h1>
            <ul id="header-links">
                <li><a href="#">Features</a></li>
                <li><a href="#">Diet Plan <span className="dropdown-arrow">↓</span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Keto Diet</a></li>
                        <li><a href="#">Vegan Diet</a></li>
                        <li><a href="#">Paleo Diet</a></li>
                    </ul>
                </li>
                <li><a href="#">Workout Plans</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </ul>
            <div id="header-buttons">
                <button>Get Started</button>
                <button>Login</button>
            </div>
        </header>
    );
}


export default Header;