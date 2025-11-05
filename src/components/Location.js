import bakingStudio from "../pictures/bakingstudio.png";
import bakery from "../pictures/bakery.png";
import Footer from "../components/Footer";
import "../style/Location.css";

export default function Location() {
  return (
    <main className="location">
      {/* Sektion 1 */}
      <section className="loc-block">
        <img
          className="loc-img"
          src={bakingStudio}
          alt="DavidBreadHead Baking Studio"
        />

        <div className="loc-text">
          <h2 className="loc-title">Baking Studio</h2>

          <p className="loc-address">
            J. M. Marks Gade 7 kl. th<br />
            8000 Aarhus C
          </p>

          <div className="loc-hours">
            <h3>Opening hours</h3>
            <p>Mandag–Fredag: 07:15 – 18.00</p>
            <p>Lørdag: 08.30 – 18.00</p>
            <p>Søndag: 08:30–16:30</p>
          </div>
        </div>
      </section>

      {/* Sektion 2 (spejlvendt) */}
      <section className="loc-block reverse">
        <div className="loc-text">
          <h2 className="loc-title">
            Baking <span className="slash">/cafe</span>
          </h2>

          <p className="loc-address">
            Ny Munkegade 4B (in the courtyard)<br />
            8000 Aarhus
          </p>

          <div className="loc-hours">
            <h3>Opening hours</h3>
            <p>Mandag–Fredag: 07:15 – 18.00</p>
            <p>Lørdag: 08.30 – 18.00</p>
            <p>Søndag: 08:30–16:30</p>
          </div>
        </div>

        <img
          className="loc-img"
          src={bakery}
          alt="DavidBreadHead Bakery / Cafe"
        />
      </section>

      <Footer />
    </main>
  );
}
