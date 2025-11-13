import instagram from "../pictures/instagram.png";
import Footer from "../components/Footer";
import "../style/Running.css";

export default function Running() {
  return (
    <main className="running-page">
      <section className="running-intro">
        <h1>BreadHead Running Club</h1>
        <p>
          Hver tirsdag og torsdag mødes vi foran bageriet og løber en rolig tur sammen
          gennem byen. Der er plads til alle!
        </p>
      </section>

      {/* Info-boks – Torsdags Tons */}
      <section className="running-info">
        <div className="running-card">
          <h2>Tirsdags morgenløb</h2>
          <p>
            <strong>Tid:</strong> 06.45<br />
            <strong>Hvor:</strong> DavidBreadHead, Ny Munkegade 4B<br />
            <strong>Pace:</strong> ca. 5:30–5:40 min/km<br />
            <strong>Distance:</strong> 6–7 km<br />
          </p>
        </div>
        <p></p>
        <div className="running-card">
          <h2>Torsdags Tons</h2>
          <p>
            <strong>Tid:</strong> 17.30<br />
            <strong>Hvor:</strong> DavidBreadHead, Ny Munkegade 4B<br />
            <strong>Pace:</strong> ca. 5:30–5:40 min/km<br />
            <strong>Distance:</strong> 6–7 km<br />
            Hver torsdag – ingen tilmelding, bare mød op.
          </p>
          <a
                    href="https://www.instagram.com/breadheadrunningclub/?hl=da"
                    className="instagramrunning"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <img src={instagram} alt="Instagram" className="instagram-photo" />
          </a>
        </div>
      </section>

    <Footer/>
    </main>
  );
}