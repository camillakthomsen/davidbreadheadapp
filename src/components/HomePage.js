import "./../style/HomePage.css";
import Footer from "../components/Footer";
import FrontpagePicture from "../pictures/desk.JPG";
import davidbreadheadPhoto from "../pictures/davidbreadhead.JPG";

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-only">
        <h1>DavidBreadHead</h1>
        <h2>BAKERY, COFFEE & CAFE</h2>
        
        <div className="image-row full-height">
          <div className="small-img-wrapper">
            <img
              src={FrontpagePicture}
              alt="Small"
              className="hero-image small-img"
            />
            <p className="small-img-text">
            DavidBreadHead Bakery i Aarhus, Danmark – brød, kage og meget mere.
            </p>
          </div>

            <img
              src={davidbreadheadPhoto}
              alt="Large"
              className="hero-image large-img full-height-img"
            />
        </div>
      </section>

      <Footer />
    </main>
  );
}
