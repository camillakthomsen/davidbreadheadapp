import "./../style/HomePage.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FrontpagePicture from "../pictures/frontpagepicture.png";
import Surdejskursus from "../pictures/surdejskursus.png";
import JubiCoffee from "../pictures/jubicoffee.png";

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="hero">
        <a className="FrontPicture">
          <img src={FrontpagePicture} alt="FrontPagePicture" className="frontpicture" />
        </a>
      </section>

      <section className="surdejskursus">
        <div className="surdej-left">
          <a className="SurdejsKursus">
            <img src={Surdejskursus} alt="Surdejskursus" className="surdejskursus" />
          </a>
        </div>

        <div className="surdej-right">
          <h1>Surdejskursus</h1>
          <p>Kunne du tænke dig at mestre det perfekte surdejsbrød? – Eller rulle den perfekte sprøde croissant? Så er et surdejskursus nok for dig!</p>
          <p>Vi afholder løbende vores surdejskurser 1-2 gange om måneden. Datoerne vil blive lagt op her på siden og instagram, som regel måneden inden. Læs mere om surdejskurset</p>
          <Link to="/sourdough" className="buttonsurdej">Surdejskursus</Link>
        </div>
      </section>

      <section className="jubicoffe-section">
        <div className="coffee-left">
          <h1>Jubi Coffee x DavidBreadHead</h1>
          <p>DavidBreadHead Artisan Bakery og Jubi Coffee Roasters er gået sammen for at skabe den ultimative kombination af friskbagt brød og specialkaffe. Dette samarbejde hylder det håndværksmæssige, med eksklusive menuitems som surdejsbagværk parret med single-origin bryg.</p>
          <Link to="/coffee" className="buttonjubicoffee">Jubi Coffee</Link>
        </div>

        <div className="coffee-right">
          <a className="jubicoffee">
            <img src={JubiCoffee} alt="JubiCoffee" className="jubi-picture" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}