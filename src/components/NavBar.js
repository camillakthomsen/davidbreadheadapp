// NavBar.js
import { useState } from "react";
import StaggeredMenu from "../components/StaggeredMenu";
import "./../App.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((p) => !p);
  const closeMenu = () => setIsOpen(false);

  const items = [
    { label: "Home", link: "/" },
    { label: "Bakery2Business", link: "/bakery2business" },
    { label: "Running", link: "/running" },
    { label: "Sourdough", link: "/surdejskursus" },
    { label: "History", link: "/historie" },
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
