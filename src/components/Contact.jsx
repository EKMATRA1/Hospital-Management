import "../styles/Contact.css";
import hospitalImg from "../assets/images/contact.jpg";

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-content">
          <span className="small-title">
            GET IN TOUCH
          </span>
          <h2>
            We're Always Ready <br />
            To Help You
          </h2>
          <p className="contact-desc">
            If you have any questions regarding appointments,
            treatments or emergency services, feel free to contact
            Shri HealthCare Hospital. Our team is available 24×7
            to assist you.
          </p>
          <div className="contact-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h3>Hospital Address</h3>
              <p>
                Shri HealthCare Hospital <br />
                Bokaro Steel City, Jharkhand, India
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h3>Call Us</h3>
              <p>+91 9905219157</p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fa-solid fa-clock"></i>
            <div>
              <h3>Opening Hours</h3>
              <p>
                Monday - Sunday <br />
                Open 24 Hours
              </p>
            </div>
          </div>
        </div>
        <div className="contact-image">
          <img src={hospitalImg} alt="Hospital" />
        </div>
      </section>

      <section className="contact-map">
        <h2>Find Our Hospital</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29230.861509393446!2d86.12817686365871!3d23.6810467379056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4237c8dd43129%3A0x8ca20bf10c55c9d9!2sSHREE%20HOSPITAL!5e0!3m2!1sen!2sin!4v1785863434319!5m2!1sen!2sin" 
          width="100%"
          height="500"
          style={{ border: "0", borderRadius: "15px" }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
      </section>
    </>
  );
}
export default Contact;