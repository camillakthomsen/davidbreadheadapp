import { Link } from "react-router-dom";
import "../style/StaggeredMenu.css";

export default function StaggeredMenu({
  isOpen,
  onClose,
  position = "left",
  items = [],
  socialItems = [],
  displaySocials = false,
  displayItemNumbering = true,
  colors = ["#fff7e9", "#e9d5b4"],
  accentColor = "#b0451f",
  logoUrl,
}) {
  return (
    <>
      <div className={`smenu-overlay ${isOpen ? "show" : ""}`} onClick={onClose} />
      <aside
        className={`smenu ${position} ${isOpen ? "open" : ""}`}
        style={{ "--c1": colors[0], "--c2": colors[1], "--accent": accentColor }}
        aria-hidden={!isOpen}
      >
        <div className="smenu-header">
          {logoUrl && <img className="smenu-logo" src={logoUrl} alt="Logo" />}
          <button className="smenu-close" onClick={onClose} aria-label="Luk menu">✕</button>
        </div>

        <ul className="smenu-list" data-numbering={displayItemNumbering || undefined}>
          {items.map((it, idx) => (
            <li className="smenu-li" style={{ "--i": idx }} key={it.link}>
              <Link className="smenu-item" to={it.link} onClick={onClose}>
                <span className="label">{it.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {displaySocials && socialItems?.length > 0 && (
          <div className="smenu-socials">
            {socialItems.map((s) => (
              <a key={s.link} href={s.link} target="_blank" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        )}
      </aside>
    </>
  );
}
