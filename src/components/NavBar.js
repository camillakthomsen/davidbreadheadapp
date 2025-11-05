import { Link, NavLink } from "react-router-dom";
import basket from "../pictures/basket.png";
import location from "../pictures/location.png";
import bread from "../pictures/bread.png";
import running from "../pictures/running.png";
import coffee from "../pictures/coffee.png";
import "./../App.css";

export default function NavBar() {
  return (
    <header className="nav">
  <div className="nav-left">
        <Link to="/sourdough" className="bread-icon">
          <img src={bread} alt="Bread" className="bread-icon" />
        </Link>

        <Link to="/location" className="location-icon">
          <img src={location} alt="Location" className="location-icon" />
        </Link>

        <Link to="/running" className="running-icon">
          <img src={running} alt="Running" className="running-icon" />
        </Link>

        <Link to="/coffee" className="coffee-icon">
          <img src={coffee} alt="Coffee" className="coffee-icon" />
        </Link>
      </div>

  <div className="nav-center">
    <Link to="/homepage">DavidBreadHead</Link>
  </div>

  <div className="nav-right">
    <Link to="/delivery" className="cart-icon">
          <img src={basket} alt="Indkøbskurv" className="cart-icon" />
    </Link>
  </div>
</header>
  );
}
