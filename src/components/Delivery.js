import bread1 from "../pictures/bread1.png";
import bread2 from "../pictures/bread2.png";
import bread3 from "../pictures/bread3.png";
import pasteri1 from "../pictures/pasteri1.png";
import pasteri2 from "../pictures/pasteri2.png";
import pasteri3 from "../pictures/pasteri3.png";
import "../style/Delivery.css";

export default function Delivery() {
  const items = [
  { src: bread1, caption: "Aros loaf", price: "55,-" },
  { src: bread2, caption: "Sesam loaf", price: "55,-" },
  { src: bread3, caption: "Rugbrød", price: "35,-" },
  { src: pasteri1, caption: "Croissant", price: "35,-" },
  { src: pasteri2, caption: "Pain au chocolat", price: "38,-" },
  { src: pasteri3, caption: "Seasonal pastry", price: "42,-" },
];

  return (
    <main className="delivery-page">
      {/* --- MENU BOARD --- */}
      <section className="menu-wrap">
        <div className="menu-board">
          <h2 className="menu-title">MENU</h2>
          <ul className="menu-list">
            <li><span className="label">Aros Loaf</span><span className="price">55,-</span></li>
            <li><span className="label">Espresso</span><span className="price">25,-</span></li>
            <li><span className="label">Sesam Loaf</span><span className="price">55,-</span></li>
            <li><span className="label">Americano</span><span className="price">30,-</span></li>
            <li><span></span></li>
            <li><span className="label">Batch Brew</span><span className="price">30,-</span></li>
            <li><span className="label">Surdejsbolle</span><span className="price">16,-</span></li>
            <li><span className="label">Latte</span><span className="price">42,-</span></li>
            <li><span className="label">4 × Surdejsbolle</span><span className="price">55,-</span></li>
            <li><span className="label">Cappuccino</span><span className="price">42,-</span></li>
            <li><span className="label">Rugbrød</span><span className="price">35,-</span></li>
            <li><span className="label">Flat White</span><span className="price">42,-</span></li>
            <li><span></span></li>
            <li><span className="label">Cortado</span><span className="price">42,-</span></li>
            <li><span className="label">Mandags combo-</span><span className="price"></span></li>
            <li><span className="label">Islatte</span><span className="price">48,-</span></li>
            <li><span className="label">BMO + Batch Brew</span><span className="price">45,-</span></li>
            <li><span className="label">Varm choco</span><span className="price">42,-</span></li>
            <li><span className="label">(Gælder til kl. 12)</span><span className="price"></span></li>
            <li><span className="label">Te</span><span className="price">30,-</span></li>
            <li><span className="label">Græsk yoghurt m. granola</span><span className="price"></span></li>
            <li><span className="label">Matcha latte/iced</span><span className="price">48,-/51,-</span></li>
            <li><span className="label">Frugt og kompot</span><span className="price">49,-</span></li>
            <li><span className="label">Chai</span><span className="price">48,-</span></li>
            <li><span className="label">(Kan tages med)</span><span className="price"></span></li>
            <li><span></span></li>
            <li><span></span></li>
            <li><span className="label">BMO</span><span className="price">35,-</span></li>
            <li><span className="label">BMO-kort</span><span className="price">145,-</span></li>
            <li><span className="label">Æg</span><span className="price">10,-</span></li>
            <li><span className="label">Kaffe-kort</span><span className="price">165,-</span></li>
            <li><span className="label">Sandwich</span><span className="price">59,-</span></li>
            <li><span className="label">BMO+kaffe-kort</span><span className="price">295,-</span></li>
            <li><span className="label">Grillet crossaint</span><span className="price">49,-</span></li>
            <li><span></span></li>
            <li><span className="label">Morgenbræt</span><span className="price">59,-</span></li>
            <li><span></span></li>
            <li><span className="label">BMO + græsk yoghurt</span><span className="price"></span></li>
            
            <li className="sep" aria-hidden="true"></li>

          </ul>
        </div>
      </section>

    </main>
  );
}
