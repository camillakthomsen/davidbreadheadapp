import Footer from "./Footer";
import "../style/BaristaKursus.css";

export default function BaristaKursus() {
  return (
    <main className="barista-page">
      <section className="barista-hero">

        {/* VENSTRE SIDE – SELVE BRØDTEKSTEN */}
<div className="barista-text">

  {/* OVERSKRIFT UDENFOR BOKS */}
  <h1>Barista Kursus</h1>

  {/* BLUR/TRANSPARENT BOKS */}
  <div className="barista-textbox">
    <p>
      Et kursus i selskab med Cecilie, der vil tage jer igennem en hyggelig aften i kaffens tegn.
      <br /><br />
      Kurset byder på:
    </p>

    <ul className="barista-list">
      <li>En smagning af kaffe brygget på forskellige bønner.</li>
      <li>
        En grundig gennemgang af brygning af espresso – forstå hvordan du justerer espressoen
        for at opnå den bedste smagsoplevelse.
      </li>
      <li>
        Mælkeworkshop – hvordan steamer du den bedste mælk og opnår den helt rette tekstur og temperatur.
      </li>
      <li>Hældeteknik og latte art</li>
    </ul>

    <p>
      Kurset er for alle – især ideelt for nybegyndere som ønsker at tage viden og erfaring med hjem.
    </p>
  </div>
</div>



        {/* HØJRE SIDE – INFOBOKS */}
        <div className="barista-right">
          <section className="barista-next">
            <article className="course-card">
              <div className="course-main">
                <p>Pris: 450 kr.</p>
                <p>Tid: Ca. 2 timer</p>
                <p>Sted: Ny Munkegade 4b</p>

                <br />
                <p><strong>Dato:</strong> 20 januar kl. 19</p>
                <p><strong>Tilmelding:</strong> Cecilie.breadhead@gmail.com</p>
              </div>
            </article>
          </section>
        </div>

      </section>

      <Footer />
    </main>
  );
}
