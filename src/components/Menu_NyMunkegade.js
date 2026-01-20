import almondcroissant_1 from "../pictures/almondcrossaint.webp";
import almondcroissant_2 from "../pictures/almondcrossaint1.webp";
import brunsviger_1 from "../pictures/brunsvigercroissant.webp";
import brunsviger_2 from "../pictures/brunsvigercroissant1.webp";
import cardemomme_1 from "../pictures/cardemommebun.webp";
import cardemomme_2 from "../pictures/cardemommebun1.webp";
import drommekage_1 from "../pictures/drommekage.webp";
import drommekage_2 from "../pictures/drommekage1.webp";
import monkeybread_1 from "../pictures/monkeybread.webp";
import monkeybread_2 from "../pictures/monkeybread1.webp";
import pain_1 from "../pictures/painachocolate1.webp";
import pain_2 from "../pictures/painachocolate2.webp";
import vaniljespandauer_1 from "../pictures/vaniljespandauer1.webp";
import vaniljespandauer_2 from "../pictures/vaniljespandauer.webp";
import kanelsnegl_1 from "../pictures/kanelsnegl.webp";
import kanelsnegl_2 from "../pictures/kanelsnegl1.webp";
import fastalavnsbollesalt_1 from "../pictures/fastesalt.webp";
import fastalavnsbollesalt_2 from "../pictures/fastesalt1.webp";
import fastalavnsbollenut_1 from "../pictures/fastenut.webp";
import fastalavnsbollenut_2 from "../pictures/fastenut1.webp";
import Footer from "./Footer";
import "../style/Menu.css";

export default function Menu_MorksGade() {
  const items = [
    { src: fastalavnsbollesalt_1, hoverSrc: fastalavnsbollesalt_2, caption: "Vanilla diplomat cream with chocolate ganache", price: "40,-"},
    { src: fastalavnsbollenut_2, hoverSrc: fastalavnsbollenut_1, caption: "Coffee diplomat cream and chocolate ganache and hazelnuts", price: "40,-"},
    { src: almondcroissant_1, hoverSrc: almondcroissant_2, caption: "Almond croissant", price: "42,-" },
    { src: brunsviger_1, hoverSrc: brunsviger_2, caption: "Brunsviger croissant", price: "40,-" },
    { src: cardemomme_1, hoverSrc: cardemomme_2, caption: "Cardemom bun", price: "38,-" },
    { src: drommekage_1, hoverSrc: drommekage_2, caption: "Drømmekage Rolls", price: "38,-" },
    { src: monkeybread_1, hoverSrc: monkeybread_2, caption: "Monkey bread", price: "38,-" },
    { src: pain_1, hoverSrc: pain_2, caption: "Pain au chocolat", price: "42,-" },
    { src: vaniljespandauer_1, hoverSrc: vaniljespandauer_2, caption: "Vanilla custard Danish", price: "38,-" },
    { src: kanelsnegl_2, hoverSrc: kanelsnegl_1, caption: "Cinnamon bun", price: "38,-" },
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
              <li><span className="label">Sourdough bun</span><span className="price">16,-</span></li>
              <li><span className="label">4 × Sourdough bun</span><span className="price">55,-</span></li>
              <li><span className="label">Rye bread</span><span className="price">35,-</span></li>
              <li><span></span></li>
              <li><span className="label">Monday combo-</span><span className="price"></span></li>
              <li><span className="label">BMO + Batch Brew</span><span className="price">45,-</span></li>
              <li><span className="label">(Until 12:00)</span><span className="price"></span></li>
              <li><span className="label">Greek yoghurt with granola</span><span className="price"></span></li>
              <li><span className="label">Fruit and compot</span><span className="price">49,-</span></li>
              <li><span className="label">(Kan tages med)</span><span className="price"></span></li>
              <li><span></span></li>
              <li><span className="label">BMO</span><span className="price">35,-</span></li>
              <li><span className="label">BMO-card</span><span className="price">145,-</span></li>
              <li><span className="label">BMO+coffee-card</span><span className="price">295,-</span></li>
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
              <li><span className="label">Ice latte</span><span className="price">48,-</span></li>
              <li><span className="label">Warm choco</span><span className="price">42,-</span></li>
              <li><span className="label">Te</span><span className="price">30,-</span></li>
              <li><span className="label">Matcha latte/iced</span><span className="price">48,-/51,-</span></li>
              <li><span className="label">Chai</span><span className="price">48,-</span></li>
              <li><span></span></li>
              <li><span className="label">BMO</span><span className="price">35,-</span></li>
              <li><span className="label">Egg</span><span className="price">10,-</span></li>
              <li><span className="label">Sandwich</span><span className="price">59,-</span></li>
              <li><span className="label">Grilled crossaint</span><span className="price">49,-</span></li>
              <li><span className="label">Morning board</span><span className="price">59,-</span></li>
              <li><span className="label">BMO + greek yoghurt</span><span className="price"></span></li>
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
