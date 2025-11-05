import { useState } from "react";
import Surdejskursus from "../pictures/surdejskursus.png";
import Footer from "../components/Footer";

export default function Sourdough() {
  const infoTexts = [
    "Der er både teori og praktisk læring. Du kommer til at lave dit eget surdejsbrød i løbet af aftenen og får surdej – samt rå croissanter med hjem, som du kan bage af.",
    "Vi gennemgår alt teorien bag surdejsbagning: fra korntyper, vandforhold og foldeteknik til autolyse og bagning.",
    "Der vil være let aftensmad bestående af surdejsbrød, ost, pølse og små delikatesser."
  ];

  const [ix, setIx] = useState(0);
  const nextInfo = () => setIx((i) => (i + 1) % infoTexts.length);

  return (
    <main className="homepage">
      <section className="surdejskursus">
        <div className="surdej-left">
          <img src={Surdejskursus} alt="Surdejskursus" className="surdej-img" />
        </div>

        <div className="surdej-right">
          <h1>surdejskursus</h1>
          <p>
            Kunne du tænke dig at mestre det perfekte surdejsbrød? – Eller rulle
            den perfekte sprøde croissant? Så er et surdejskursus nok for dig!
          </p>
          <p>
            Vi afholder løbende vores surdejskurser 1–2 gange om måneden.
            Datoerne vil blive lagt op her på siden og på Instagram, som regel
            måneden inden. Læs mere om surdejskurset.
          </p>

          {/* INFO-BOKS */}
          <div className="info-box">
            <div className="info-header">
              <span className="info-title">info</span>
            </div>
            <div className="info-content">
              <p>{infoTexts[ix]}</p>
              <button className="enter-btn small right-arrow" onClick={nextInfo}>
                ➜
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
