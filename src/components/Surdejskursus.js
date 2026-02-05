import Footer from "./Footer";
import "../style/surdejskursus.css";

export default function Surdejskursus() {
  return (
    <main className="sourdough-page">
      <section className="sourdough-hero">

        {/* VENSTRE SIDE – SELVE BRØDTEKSTEN */}
<div className="sourdough-text">

  {/* OVERSKRIFT UDENFOR BOKS */}
  <h1>Sourdough Course</h1>

  {/* BLUR / GLASS BOKS */}
  <div className="sourdough-textbox">

    <p>
      A cozy evening in the company of David Milberg, the owner of DavidBreadHead.
      <br /><br />
      Do you want to learn how to master the perfect loaf and roll the most beautiful croissants?
      <br /><br />
      Then this course is perfect for you.
    </p>

    <h2 className="sourdough-subtitle">What will you learn:</h2>
    <ul className="sourdough-list">
      <li>Theory</li>
      <li>Dough handling</li>
      <li>What to do if something goes wrong</li>
      <li>You will make your own dough from scratch</li>
      <li>You will learn how to shape bread</li>
      <li>Scoring – and how to do it</li>
    </ul>

    <h2 className="sourdough-subtitle">What do you get?</h2>
    <ul className="sourdough-list">
      <li>Your own bread to take home</li>
      <li>Banneton basket</li>
      <li>Recipe booklet</li>
      <li>Croissants to bake at home</li>
      <li>A light dinner</li>
      <li>Learning</li>
      <li>A cozy evening</li>
    </ul>

  </div>
</div>


        {/* HØJRE SIDE – INFOBOKS */}
        <div className="sourdough-right">

          <section className="sourdough-next">
            <article className="course-card">
              <div className="course-main">
                <p>Price: DKK 1,100</p>
                <p>Duration: approx. 3 hours</p>
                <p>Location: Ny Munkegade 4B, Aarhus C</p>
                <p>Time: 5:00 PM</p>
                <p>Please bring an apron</p>

                <br />
                <p><strong>Date:</strong> 23 March</p>
                <p><strong>Sign-up:</strong> DavidBreadHead@gmail.com </p>
              </div>
            </article>
          </section>

          <div className="sourdough-actions">
            <a
              href="/Opskrift-Davidbreadhead.pdf"
              download
              className="secondary-btn"
            >
              Download recipe
            </a>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  );
}
