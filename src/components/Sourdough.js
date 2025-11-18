import SourdoughGif from "../pictures/bread_icon_half_width_larger.gif";
import Footer from "../components/Footer";
import "../style/Sourdough.css";

export default function Sourdough() {
  return (
    <main className="sourdough-page">
      <section className="sourdough-hero">
        <div className="sourdough-left">
          <img
            src={SourdoughGif}
            alt="Sourdough Animation"
            className="surdej-img"
          />
        </div>

        <div className="sourdough-right">
          <h1>Surdejskursus</h1>

          <div className="sourdough-list">
            <p>Nyder du at nørde med bagværk! Så er et surdejskursus nok for dig! Vi afholder løbende vores surdejskurser 1-2 gange om måneden. Datoerne vil blive lagt op her på siden og instagram</p>
          </div>

          {/* NÆSTE KURSUS */}
          <section className="sourdough-next">
            <h2>Næste surdejskursus</h2>

            <article className="course-card">
              <div className="course-date">
                <span className="course-month">NOV</span>
                <span className="course-day">24</span>
              </div>
              <div className="course-main">
                <p className="course-title">Surdejskursus i bageriet (udsolgt)</p>
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
          <div className="sourdough-list">
            <p>Du får en hævekurv, din egen surdej og et friskbagt brød med hjem, samt dej og rå croissanter, du selv bager færdig. Derudover får du opskrift og en trin-for-trin gennemgang under kurset.</p>
          </div>

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
