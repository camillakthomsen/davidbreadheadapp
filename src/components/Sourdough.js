import Surdejskursus from "../pictures/surdejskursus.png";
import Footer from "../components/Footer";
import "../style/Sourdough.css";

export default function Sourdough() {
  return (
    <main className="sourdough-page">
      <section className="sourdough-hero">
        <div className="sourdough-left">
          <img
            src={Surdejskursus}
            alt="Surdejskursus"
            className="surdej-img"
          />
        </div>

        <div className="sourdough-right">
          <h1>surdejskursus</h1>

          {/* NÆSTE KURSUS */}
          <section className="sourdough-next">
            <h2>Næste surdejskursus</h2>

            <article className="course-card">
              <div className="course-date">
                <span className="course-month">NOV</span>
                <span className="course-day">24</span>
              </div>
              <div className="course-main">
                <p className="course-title">Surdejskursus i bageriet (ledige pladser)</p>
                <p className="course-details">
                  Kl. 17.00–20.30 · Ny Munkegade 4B, Aarhus C
                </p>
                <p className="course-price">
                  Pris: 1.100 kr. · Plads til 8–10 deltagere
                </p>
              </div>
            </article>
          </section>

          {/* KORT “DET FÅR DU” */}
          <ul className="sourdough-list">
            <li>Hævekurv, egen surdej og et friskbagt brød med hjem</li>
            <li>Dej og rå croissanter, du selv bager færdig</li>
            <li>Opskrift og trin-for-trin gennemgang under kurset</li>
          </ul>

          {/* KNAPPER */}
          <div className="sourdough-actions">
            <a
              href="/Opskrift-Davidbreadhead.pdf"
              download
              className="secondary-btn"
            >
              Download opskrift
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
