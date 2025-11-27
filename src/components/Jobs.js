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
              <span className="job-label-bottom">Intern</span>
            </div>
            <div className="job-main">
              <h2 className="job-title">SoMe Intern</h2>
              <p className="job-description">
                As a SoMe intern, you will help manage our Instagram, TikTok, and other platforms with the goal of driving more traffic and creating relevant content for our channels.
You will be responsible for developing a strong social media strategy and executing it — everything from photos, reels, TikTok, YouTube, podcasts, and more.
              </p>
            </div>
          </article>

          <article className="job-card">
            <div className="job-label">
              <span className="job-label-top">Unsolicited</span>
              <span className="job-label-bottom">Application</span>
            </div>
            <div className="job-main">
              <h2 className="job-title">Unsolicited application</h2>
              <p className="job-description">
                We sometimes need new hands without realizing it, so feel free to send an unsolicited application.
              </p>
            </div>
          </article>
        </div>

        {/* --- Ansøgningsinfo --- */}
        <div className="jobs-apply">
          <p>Please send the application to:</p>
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
