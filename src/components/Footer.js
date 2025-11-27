import "./../style/Footer.css";
import { Link } from "react-router-dom";
import instagram from "../pictures/instagram.png";
import facebook from "../pictures/facebook.png";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-left">
                <h4>About</h4>
                <p>
                    David Milberg founded DavidBreadHead during the COVID period, initially baking from home. He quickly opened a small basement bakery, and after just one year he outgrew the space and opened a 500 m² café and bakery, a professional bakery, and a coffee brand — and today he has over 20 employees.
                </p>
                <div>
                    <a
                    href="https://www.instagram.com/davidbreadhead/?hl=da"
                    className="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={instagram} alt="Instagram" className="instagram-photo" />
                    </a>

                    <a
                    href="https://www.facebook.com/DavidBreadHead"
                    className="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={facebook} alt="Facebook" className="facebook-photo" />
                    </a>
                </div>

            </div>
            <div className="footer-right">
                <h4>Contact</h4>
                <Link to="/location">Location</Link>
                <Link to="/events">Events</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/jobs">Jobs</Link>
            </div>

        </footer>
    )
}