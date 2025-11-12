import Footer from "../components/Footer";
import "../style/Jobs.css";

function Jobs() {
  return (
    <main>
    <section className="jobs">
      <div className="jobs-inner">
        <h1>BreadHeadJobs</h1>

        <div className="jobs-list">
          <article className="job-card">
            <div className="job-label">
              <span className="job-label-top">SoMe</span>
              <span className="job-label-bottom">Praktikant</span>
            </div>
            <div className="job-main">
              <h2 className="job-title">SoMe praktikant</h2>
              <p className="job-description">
                Som SoMe Praktikant skal du være med til at drive vores Instagram, TikTok og andre medier med henblik på at skaffe mere trafik og lave relevant content til vores platforme.
Du får ansvaret for at lave en stærk SoMe Strategi og eksekvering, alt fra billeder, reels, Tiktok, Youtube, podcast mm.
              </p>
            </div>
          </article>

          <article className="job-card">
            <div className="job-label">
              <span className="job-label-top">Uopfordret</span>
              <span className="job-label-bottom">Ansøgning</span>
            </div>
            <div className="job-main">
              <h2 className="job-title">Uopfordret ansøgning</h2>
              <p className="job-description">
                Vi mangler nogengange nye hænder uden vi ved det, så send en ansøgning uopfordret. 
              </p>
            </div>
          </article>
        </div>

        {/* --- Ansøgningsinfo --- */}
        <div className="jobs-apply">
          <p>Jobansøgninger bedes sendes til:</p>
          <a href="mailto:davidbreadhead@gmail.com" className="jobs-email">
            davidbreadhead@gmail.com
          </a>
        </div>
      </div>
    </section>
    <Footer />
    </main>
  );
}

export default Jobs;
