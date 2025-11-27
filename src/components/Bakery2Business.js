import Footer from "./Footer";
import "../style/Bakery2Business.css";

export default function Bakery2Business() {
  return (
    <main className="coffee-page">
      <section className="coffee-section">
        <h1 className="coffee-title">Bakery2Business</h1>

        <article className="business-card">
              <div className="business-main">
                <p>Vi kan leverer friskbagt brød, kager og kvalitetskaffe direkte til din virksomhed — nemt, hurtigt og altid nybagt. Perfekt til møder, kontorer og events.</p>
                <p>Bestillinger bedes sendes til:</p>
                <a href="mailto:davidbreadhead@gmail.com" className="jobs-email">
                  davidbreadhead@gmail.com
                </a>
              </div>
            </article>
      </section>

      <Footer />
    </main>
  );
}

