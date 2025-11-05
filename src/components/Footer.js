import "./../style/Footer.css";
import { Link } from "react-router-dom";
import instagram from "../pictures/instagram.png";
import facebook from "../pictures/facebook.png";
import strava from "../pictures/strava.png";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="footer-left">
                <h4>About</h4>
                <p>
                    David Milberg founded DavidBreadHead during corona, where he in the
                    beginning baked from home, and quickly opened in a small basement and
                    after only 1 year grew out of space and opened a 500 kvm cafe and
                    professional bakery and coffee brand and 20+ employees.
                </p>
                <div>
                    <a href="#" className="instagram">
                        <img src={instagram} alt="Instagram" className="instagram-photo" />
                    </a>
                    <a href="#" className="facebook">
                        <img src={facebook} alt="Facebook" className="facebook-photo" />
                    </a>
                    <a href="#" className="strava">
                        <img src={strava} alt="Strava" className="strava-photo" />
                    </a>
                </div>
            </div>
            <div className="footer-right">
                <h4>Contact</h4>
                <Link to="/location">Location</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/jobs">Jobs</Link>
            </div>

        </footer>
    )
}