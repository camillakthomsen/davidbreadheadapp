import Footer from "./Footer";
import "../style/BaristaKursus.css";

export default function BaristaKursus() {
  return (
    <main className="barista-page">
      <section className="barista-hero">

        {/* VENSTRE SIDE – SELVE BRØDTEKSTEN */}
<div className="barista-text">

  {/* OVERSKRIFT UDENFOR BOKS */}
  <h1>Barista Course</h1>

  {/* BLUR/TRANSPARENT BOKS */}
  <div className="barista-textbox">
    <p>
      A course in the company of Cecilie, who will guide you through a cozy evening dedicated to coffee.
      <br /><br />
      The course includes:
    </p>

    <ul className="barista-list">
      <li>A tasting of coffee brewed with different beans.</li>
      <li>
          A thorough introduction to brewing espresso – learn how to adjust your espresso to achieve the best flavor experience.
      </li>
      <li>
          Milk workshop – how to steam milk perfectly and achieve the right texture and temperature.
      </li>
      <li>Pouring technique and latte art</li>
    </ul>

    <p>
      The course is for everyone – especially ideal for beginners who want to take knowledge and hands-on experience home.
    </p>
  </div>
</div>



        {/* HØJRE SIDE – INFOBOKS */}
        <div className="barista-right">
          <section className="barista-next">
            <article className="course-card">
              <div className="course-main">
                <p>Price: DKK 450</p>
                <p>Duration: approx. 2 hours</p>
                <p>Location: Ny Munkegade 4B</p>

                <br />
                <p><strong>Date:</strong> 17 Februay and 24 March at 7:00 PM</p>
                <p><strong>Sign-up:</strong> Cecilie.breadhead@gmail.com</p>
              </div>
            </article>
          </section>
        </div>

      </section>

      <Footer />
    </main>
  );
}
