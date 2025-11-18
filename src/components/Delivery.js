import almondcroissant_1 from "../pictures/almondcrossaint.png";
import almondcroissant_2 from "../pictures/almondcrossaint1.png";
import brunsviger_1 from "../pictures/brunsvigercroissant.png";
import brunsviger_2 from "../pictures/brunsvigercroissant1.png";
import cardemomme_1 from "../pictures/cardemommebun.png";
import cardemomme_2 from "../pictures/cardemommebun1.png";
import drommekage_1 from "../pictures/drommekage.png";
import drommekage_2 from "../pictures/drommekage1.png";
import monkeybread_1 from "../pictures/monkeybread.png";
import monkeybread_2 from "../pictures/monkeybread1.png";
import pain_1 from "../pictures/painachocolate1.png";
import pain_2 from "../pictures/painachocolate2.png";
import vaniljespandauer_1 from "../pictures/vaniljespandauer1.png";
import vaniljespandauer_2 from "../pictures/vaniljespandauer.png";
import Footer from "./Footer";
import "../style/Delivery.css";

export default function Delivery() {
  const items = [
    { src: almondcroissant_1, hoverSrc: almondcroissant_2, caption: "Mandel croissant", price: "42,-" },
    { src: brunsviger_1, hoverSrc: brunsviger_2, caption: "Brunsviger croissant", price: "40,-" },
    { src: cardemomme_1, hoverSrc: cardemomme_2, caption: "Kademommesnurrer", price: "38,-" },
    { src: drommekage_1, hoverSrc: drommekage_2, caption: "Drømmekage snegl", price: "38,-" },
    { src: monkeybread_1, hoverSrc: monkeybread_2, caption: "Monkey bread", price: "38,-" },
    { src: pain_1, hoverSrc: pain_2, caption: "Pain au chocolat", price: "42,-" },
    { src: vaniljespandauer_1, hoverSrc: vaniljespandauer_2, caption: "Vanilje spandauer", price: "38,-" },
  ];

  return (
    <main className="delivery-page">
      {/* --- MENU BOARD --- */}
      <section className="menu-wrap">
        <div className="menu-board">
          <h2 className="menu-title">MENU</h2>

          <div className="menu-columns">
            {/* Venstre kolonne – brød, mad osv. */}
            <ul className="menu-list">
              <li><span className="label">Aros Loaf</span><span className="price">55,-</span></li>
              <li><span className="label">Sesam Loaf</span><span className="price">55,-</span></li>
              <li><span></span></li>
              <li><span className="label">Surdejsbolle</span><span className="price">16,-</span></li>
              <li><span className="label">4 × Surdejsbolle</span><span className="price">55,-</span></li>
              <li><span className="label">Rugbrød</span><span className="price">35,-</span></li>
              <li><span></span></li>
              <li><span className="label">Mandags combo-</span><span className="price"></span></li>
              <li><span className="label">BMO + Batch Brew</span><span className="price">45,-</span></li>
              <li><span className="label">(Gælder til kl. 12)</span><span className="price"></span></li>
              <li><span className="label">Græsk yoghurt m. granola</span><span className="price"></span></li>
              <li><span className="label">Frugt og kompot</span><span className="price">49,-</span></li>
              <li><span className="label">(Kan tages med)</span><span className="price"></span></li>
              <li><span></span></li>
              <li><span className="label">BMO</span><span className="price">35,-</span></li>
              <li><span className="label">BMO-kort</span><span className="price">145,-</span></li>
              <li><span className="label">BMO+kaffe-kort</span><span className="price">295,-</span></li>
              <li className="sep" aria-hidden="true"></li>
            </ul>

            {/* Højre kolonne – kaffe, te osv. */}
            <ul className="menu-list">
              <li><span className="label">Espresso</span><span className="price">25,-</span></li>
              <li><span className="label">Americano</span><span className="price">30,-</span></li>
              <li><span className="label">Batch Brew</span><span className="price">30,-</span></li>
              <li><span className="label">Latte</span><span className="price">42,-</span></li>
              <li><span className="label">Cappuccino</span><span className="price">42,-</span></li>
              <li><span className="label">Flat White</span><span className="price">42,-</span></li>
              <li><span className="label">Cortado</span><span className="price">42,-</span></li>
              <li><span className="label">Islatte</span><span className="price">48,-</span></li>
              <li><span className="label">Varm choco</span><span className="price">42,-</span></li>
              <li><span className="label">Te</span><span className="price">30,-</span></li>
              <li><span className="label">Matcha latte/iced</span><span className="price">48,-/51,-</span></li>
              <li><span className="label">Chai</span><span className="price">48,-</span></li>
              <li><span></span></li>
              <li><span className="label">BMO</span><span className="price">35,-</span></li>
              <li><span className="label">Æg</span><span className="price">10,-</span></li>
              <li><span className="label">Sandwich</span><span className="price">59,-</span></li>
              <li><span className="label">Grillet crossaint</span><span className="price">49,-</span></li>
              <li><span className="label">Morgenbræt</span><span className="price">59,-</span></li>
              <li><span className="label">BMO + græsk yoghurt</span><span className="price"></span></li>
            </ul>
          </div>
        </div>
      </section>   {/* <- den manglede */}

      {/* --- GALLERY --- */}
      <section className="gallery">
        <div className="gallery-strip">
          {items.map((it, i) => (
            <figure key={i} className="gallery-slide">
              <div className="image-wrapper">
                <img
                  className="img-base"
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                />
                {it.hoverSrc && (
                  <img
                    className="img-hover"
                    src={it.hoverSrc}
                    alt={`${it.caption} hover`}
                    loading="lazy"
                  />
                )}
              </div>

              <figcaption>
                <span className="item-name">{it.caption}</span>
                {it.price && <span className="item-price">{it.price}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
