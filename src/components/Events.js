import Footer from "../components/Footer";
import "../style/Events.css";

function Events() {
  return (
    <main>
    <section className="events">
      <div className="events-inner">
        <h1>BreadHeadEvents</h1>

        <div className="events-list">
          <article className="event-card">
            <div className="event-date">
              <span className="event-month">Tirs &</span>
              <span className="event-month">Tors</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">
                Running
                <br />
                Hver tirsdag kl. 6:45 og torsdag kl. 17:30
              </h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">NOV</span>
              <span className="event-day">24</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Surdejskursus</h2>
            </div>
          </article>
        </div>
      </div>
    </section>

    <Footer />
    </main>
  );
}

export default Events;
