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
                    David Milberg grundlagde DavidBreadHead under corona, hvor han i begyndelsen bagte hjemmefra. 
                    Han åbnede hurtigt et lille bageri i en kælder, og efter kun ét år voksede han ud af lokalet 
                    og åbnede en café og et bageri på 500 kvm, et professionelt bageri og et kaffebrand – og har i dag over 20 medarbejdere.
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