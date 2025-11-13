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
              <span className="event-month">TUE &</span>
              <span className="event-month">THU</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">
                Running
                <br />
                Every Tuesday at 6.45 and Thursday at 17.30
              </h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">NOV</span>
              <span className="event-day">24</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Sourdough</h2>
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
