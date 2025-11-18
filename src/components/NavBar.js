// NavBar.js
import { useState } from "react";
import { Link } from "react-router-dom";
import basket from "../pictures/basket.png";
import StaggeredMenu from "../components/StaggeredMenu";
import "./../App.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(p => !p);
  const closeMenu = () => setIsOpen(false);

  const items = [
    { label: "Home", link: "/" },
    { label: "Menu", link: "/delivery" },
    { label: "Coffee", link: "/coffee" },
    { label: "Running", link: "/running" },
    { label: "Sourdough", link: "/sourdough" },
  ];

  return (
    <header className="nav">
      {/* Venstre: burger (synlig altid) */}
      <div className="nav-left">
        <button
  className="burger-btn"
  onClick={toggleMenu}
  aria-label={isOpen ? "Luk menu" : "Åbn menu"}
>
  {isOpen ? (
    <span className="burger-x">✕</span>
  ) : (
    <>
      <span className="burger-line" />
      <span className="burger-line" />
    </>
  )}
</button>

      </div>

      {/* Højre: kurv */}
      <div className="nav-right">
        <Link to="/delivery" className="cart-icon">
          <img src={basket} alt="Indkøbskurv" />
        </Link>
      </div>

      {/* VENSTRE drawer */}
      <StaggeredMenu
        isOpen={isOpen}
        onClose={closeMenu}
        position="left"
        items={items}
        displaySocials={false}
        colors={["#fff7e9", "#e9d5b4"]}
        accentColor="#b0451f"
      />
    </header>
  );
}
