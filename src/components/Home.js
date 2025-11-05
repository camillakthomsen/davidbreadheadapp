import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aaben from "../pictures/aaben.png";
import lukket from "../pictures/lukket.png";
import "./../style/Home.css";

export default function Home() {
  const navigate = useNavigate();
  const images = [aaben, lukket];
  const [index, setIndex] = useState(0);

  // Preload begge (minimerer flicker)
  useEffect(() => {
    images.forEach(src => { const i = new Image(); i.src = src; });
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home-landing">
      <img
        key={index}            // tvinger re-render så src skifter “hårdt”
        src={images[index]}
        alt={index === 0 ? "Åben dør" : "Lukket dør"}
        className="hero-full"
        decoding="async"
      />

      <button
        className="enter-btn"
        onClick={() => navigate("/homepage")}
        aria-label="Gå til forsiden"
        title="Gå til forsiden"
      >
        ⬇
      </button>
    </div>
  );
}
