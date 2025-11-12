import Footer from "../components/Footer";
import "../style/Contact.css";

export default function Contact() {
  return (
      <main className="contact-page">
      <section className="contact-intro">
        <h1 className="contact-title">Contant</h1>
        <div className="contact-apply">
          <p>Kontakt os på:</p>
          <a href="mailto:davidbreadhead@gmail.com" className="jobs-email">
            davidbreadhead@gmail.com
          </a>
        </div>
      </section>
      <Footer/>
      </main>
  );
}
