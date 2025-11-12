import "./../style/HomePage.css";
import Footer from "../components/Footer";
import FrontpagePicture from "../pictures/frontpagepicture.png";

export default function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-only">
        <img
          src={FrontpagePicture}
          alt="DavidBreadHead"
          className="hero-image"
        />
      </section>

      <Footer />
    </main>
  );
}
