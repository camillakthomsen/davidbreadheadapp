import coffeebag from "../pictures/coffeebag.png";
import Footer from "../components/Footer";
import "../style/Coffee.css";

export default function Coffee() {
  return (
    <main className="coffee-page">
      <section className="coffee-section">
        <img
          src={coffeebag}
          alt="Jubi Coffee"
          className="coffee-image"
        />

        <h1 className="coffee-title">Jubi Coffee x DavidBreadHead</h1>

        <p className="coffee-text">
          DavidBreadHead Artisan Bakery og Jubi Coffee Roasters er gået sammen
          for at skabe den ultimative kombination af friskbagt brød og
          specialkaffe. Dette samarbejde hylder det håndværksmæssige, med
          eksklusive menuitems som surdejsbagværk parret med single-origin bryg.
        </p>
      </section>

      <Footer />
    </main>
  );
}

