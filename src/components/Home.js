// src/pages/Home.js
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

// IMPORTER DINE BILLEDER HER
import Img1 from "../pictures/DS1.webp";
import Img2 from "../pictures/DS2.webp";
import Img4 from "../pictures/DS4.webp";
import Img5 from "../pictures/DS5.webp";
import Img6 from "../pictures/DS6.webp";
import Img7 from "../pictures/DS7.webp";
import Img8 from "../pictures/DS9.webp";
import Img10 from "../pictures/DS10.webp";
import Img11 from "../pictures/IMG11.webp";
import Img12 from "../pictures/bakingstudio.webp";

export default function Home() {
  const leftImages = [Img12, Img5, Img7, Img8, Img1, Img12, Img5, Img7, Img8, Img1];
  const rightImages = [Img11, Img10, Img6, Img2, Img4, Img11, Img10, Img6, Img2, Img4];

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
  const speedLeft = 0.4;
  const speedRight = 0.5;
  const intervalMs = 50;

  const id = setInterval(() => {
    const l = leftRef.current;
    const r = rightRef.current;

    if (l) {
      const maxScrollL = l.scrollHeight - l.clientHeight;
      if (maxScrollL > 0) {
        l.scrollTop = (l.scrollTop + speedLeft) % maxScrollL;
      }
    }

    if (r) {
      const maxScrollR = r.scrollHeight - r.clientHeight;
      if (maxScrollR > 0) {
        r.scrollTop = (r.scrollTop + speedRight) % maxScrollR;
      }
    }
  }, intervalMs);

  return () => clearInterval(id);
}, []);


  return (
    <main className="split-slider-page">
      <section className="split-slider">
        {/* Venstre tekstblok */}
        <div className="overlay-group overlay-group-left">
          <h1 className="overlay-title">Baking Studio</h1>
          <h2 className="overlay-undertitle">J. M. Mørks gade 7 kl. th</h2>
            <Link to="/menumorksgade" className="overlay-btn">
              Menu
            </Link>
        </div>

        {/* Højre tekstblok */}
        <div className="overlay-group overlay-group-right">
          <h1 className="overlay-title">Baking / Café</h1>
          <h2 className="overlay-undertitle">Ny Munkegade 4B</h2>
          <Link to="/menunymunke" className="overlay-btn">
            Menu
          </Link>
        </div>



        {/* Venstre kolonne */}
        <div className="column-slider" ref={leftRef}>
          {leftImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Left ${index + 1}`} loading="lazy" decoding="async" />
            </div>

          ))}
        </div>

        {/* Højre kolonne */}
        <div className="column-slider" ref={rightRef}>
          {rightImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`Right ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
