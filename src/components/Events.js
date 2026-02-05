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
              <span className="event-month">Tuesday &</span>
              <span className="event-month">Thursday</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">
                Running
                <br />
                Every Tuesday at 6:45 and Thursday at 17:30
              </h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">FEB</span>
              <span className="event-day">17</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Barista course</h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">FEB</span>
              <span className="event-day">23</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Sourdough course (sold out)</h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">MAR</span>
              <span className="event-day">23</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Sourdough course</h2>
            </div>
          </article>

          <article className="event-card">
            <div className="event-date">
              <span className="event-month">MAR</span>
              <span className="event-day">24</span>
            </div>
            <div className="event-main">
              <h2 className="event-title">Barista course</h2>
            </div>
          </article>
        </div>
      </div>
    </section>
    </main>
  );
}

export default Events;
