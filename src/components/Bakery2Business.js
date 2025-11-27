import Footer from "./Footer";
import "../style/Bakery2Business.css";

export default function Bakery2Business() {
  return (
    <main className="business-page">
      <section className="business-section">
        <h1 className="business-title">Bakery2Business</h1>

        <article className="business-card">
              <div className="business-main">
                <p>We can deliver freshly baked bread, pastries, and quality coffee directly to your business — easy, fast, and always freshly made. Perfect for meetings, offices, and events.</p>
                <p>Please send orders to:</p>
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

