import Footer from "../components/Footer";
import "../style/Contact.css";

export default function Contact() {
  return (
      <main className="contact-page">
      <section className="contact-intro">
        <h1 className="contact-title">Contant</h1>
        <div className="contact-apply">
          <p>Contact us at:</p>
          <a href="mailto:Breadhead@breadheadbakery.dk" className="jobs-email">
            Breadhead@breadheadbakery.dk
          </a>
        </div>
      </section>
      <Footer/>
      </main>
  );
}
