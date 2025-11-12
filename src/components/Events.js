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
              <span className="event-month">JAN</span>
              <span className="event-day">8</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">
                Running
                <br />
                Events
              </h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">JAN</span>
              <span className="event-day">24</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Sourdough</h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">FEB</span>
              <span className="event-day">6</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">
                Running
                <br />
                Events
              </h2>
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
