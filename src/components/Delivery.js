import bread1 from "../pictures/bread1.png";
import bread2 from "../pictures/bread2.png";
import bread3 from "../pictures/bread3.png";
import pasteri1 from "../pictures/pasteri1.png";
import pasteri2 from "../pictures/pasteri2.png";
import pasteri3 from "../pictures/pasteri3.png";
import Footer from "../components/Footer";
import "../style/Delivery.css";

export default function Delivery() {
  return (
    <main className="delivery-page">
      <section className="delivery-intro">
        <h1 className="delivery-title">Bestillinger</h1>
        <div className="delivery-apply">
          <p>Bestillinger til større arrengementer bedes sendes til:</p>
          <a href="mailto:davidbreadhead@gmail.com" className="jobs-email">
            davidbreadhead@gmail.com
          </a>
        </div>
      </section>

      <section className="delivery-section">
        <h2 className="delivery-subtitle">our bread</h2>
        <div className="delivery-grid">
          <img src={bread1} alt="Bread 1" className="delivery-img" />
          <img src={bread2} alt="Bread 2" className="delivery-img" />
          <img src={bread3} alt="Bread 3" className="delivery-img" />
        </div>
      </section>

      <section className="delivery-section">
        <h2 className="delivery-subtitle">pastries</h2>
        <div className="delivery-grid">
          <img src={pasteri1} alt="Pastry 1" className="delivery-img" />
          <img src={pasteri2} alt="Pastry 2" className="delivery-img" />
          <img src={pasteri3} alt="Pastry 3" className="delivery-img" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
