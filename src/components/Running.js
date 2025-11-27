import instagram from "../pictures/instagram.png";
import Footer from "../components/Footer";
import "../style/Running.css";

export default function Running() {
  return (
    <main className="running-page">
      <section className="running-intro">
        <h1>BreadHead Running Club</h1>
        <p>
          Every Tuesday and Thursday we meet in front of the bakery and go for a relaxed run together through the city. Everyone is welcome!
        </p>
      </section>

      {/* Info-boks – Torsdags Tons */}
      <section className="running-info">
        <div className="running-card">
          <h2>Tirsdags morgenløb</h2>
          <p>
            <strong>At:</strong> 06.45<br />
            <strong>Where:</strong> DavidBreadHead, Ny Munkegade 4B<br />
            <strong>Pace:</strong> ca. 5:30–5:40 min/km<br />
            <strong>Distance:</strong> 6–7 km<br />
            Every Tuesday – No registration needed, just show up.
          </p>
        </div>
        <p></p>
        <div className="running-card">
          <h2>Torsdags Tons</h2>
          <p>
            <strong>At:</strong> 17.30<br />
            <strong>Where:</strong> DavidBreadHead, Ny Munkegade 4B<br />
            <strong>Pace:</strong> ca. 5:30–5:40 min/km<br />
            <strong>Distance:</strong> 6–7 km<br />
            Every Thursday – No registration needed, just show up.
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

        <div className="running-video-wrapper">
  <video
    className="running-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/videos/running-bg.webm" type="video/webm" />
  </video>
</div>

      </section>

    <Footer/>
    </main>
  );
}