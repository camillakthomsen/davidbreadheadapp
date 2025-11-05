import hero from "../pictures/runningfrontpage.png";
import r1 from "../pictures/running1.png";
import r2 from "../pictures/running2.png";
import r3 from "../pictures/running3.png";
import r4 from "../pictures/running4.png";
import r5 from "../pictures/running5.png";

import Footer from "../components/Footer";
import "../style/Running.css";

export default function Running() {
  const gallery = [r1, r2, r3, r4, r5];

  return (
    <main className="running-page">
      {/* Hero */}
      <section className="run-hero">
        <img src={hero} alt="BreadHead Running Club" className="run-hero-img" />
      </section>

      {/* Info */}
      <section className="run-info">
        <h1 className="run-title">BreadHeadRunningClub</h1>

        <div className="run-facts">
          <p className="fact-title">TORSDAGS TØNS</p>
          <p>
            Hver torsdag er vi mellem 80–130 løbere der mødes og løber sammen i
            stille og roligt tempo. At løbe sammen er sjovt og nemmere! Vi løber
            sammen hver torsdag fra bageriet og i samlet flok løber vi
            forskellige ruter i højt humør.
          </p>

          <ul className="run-list">
            <li><strong>Tid:</strong> 17:30</li>
            <li><strong>Hvor:</strong> DavidBreadHead, Ny Munkegade 4b</li>
            <li><strong>Pace:</strong> 5:30–5:40</li>
            <li><strong>KM:</strong> 6–7</li>
            <li><strong>Hver torsdag – ingen undtagelser</strong></li>
          </ul>
        </div>
      </section>

      {/* Instagram-lignende række (vandret scroll) */}
      <section className="run-insta">
        <h2 className="run-sub">breadheadrunning runners</h2>

        <div className="insta-row" role="list">
          {gallery.map((src, i) => (
            <div className="insta-item" role="listitem" key={i}>
              <img src={src} alt={`Running ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

