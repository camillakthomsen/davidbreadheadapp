import Footer from "./Footer";
import "../style/surdejskursus.css";

export default function Surdejskursus() {
  return (
    <main className="sourdough-page">
      <section className="sourdough-hero">

        {/* VENSTRE SIDE – SELVE BRØDTEKSTEN */}
        <div className="sourdough-text">
          <h1>Surdejskursus</h1>

          <p>
            En hyggelig aften i selskab med David Milberg, ejeren af DavidBreadHead.
            <br /><br />
            Vil du lære at mestre det perfekte brød, rulle de smukkeste croissanter?
            <br /><br />
            Så er vores kursus lige noget for dig.
          </p>

          <h2 className="sourdough-subtitle">Hvad lærer du:</h2>
          <ul className="sourdough-list">
            <li>Teori</li>
            <li>Dejhåndtering</li>
            <li>Hvad skal man gøre hvis det går galt?</li>
            <li>Du laver din egen dej fra bunden</li>
            <li>Du lærer at shape brød</li>
            <li>Solde – og hvordan</li>
          </ul>

          <h2 className="sourdough-subtitle">Hvad får du?</h2>
          <ul className="sourdough-list">
            <li>Eget brød med hjem</li>
            <li>Kurv</li>
            <li>Opskriftbog</li>
            <li>Croissanter du selv skal bage</li>
            <li>Let aftensmad</li>
            <li>Læring</li>
            <li>En hyggelig aften</li>
          </ul>
        </div>

        {/* HØJRE SIDE – INFOBOKS */}
        <div className="sourdough-right">

          <section className="sourdough-next">
            <article className="course-card">
              <div className="course-main">
                <p>Pris: 1.100 kr.</p>
                <p>Tid: ca. 3 timer</p>
                <p>Sted: Ny Munkegade 4B, Aarhus C</p>
                <p>Kl. 17</p>
                <p>Medbring forklæde</p>
              </div>
            </article>
          </section>

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
