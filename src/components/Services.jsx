import "../styles/Services.css";
import serviceImg from "../assets/images/service.jpg";

function Services() {
  return (
    <>
      <section className="services-hero">
        <div className="services-overlay">
          <h1>Our Services</h1>
        </div>
      </section>

      <section className="services-section">
        <div className="services-content">
          <span className="small-title">
            WHAT WE OFFER
          </span>
          <h2>
            Comprehensive Healthcare <br />
            Services For Everyone
          </h2>
          <p className="service-desc">
            At Shri HealthCare Hospital, we provide quality healthcare
            services using modern medical technology and experienced
            specialists. Our goal is to deliver compassionate treatment
            for every patient.
          </p>

          <div className="service-item">
            <i className="fa-solid fa-truck-medical"></i>
            <div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency response with experienced medical team.</p>
            </div>
          </div>

          <div className="service-item">
            <i className="fa-solid fa-stethoscope"></i>
            <div>
              <h3>Advanced Diagnosis</h3>
              <p>Latest diagnostic equipment for accurate treatment.</p>
            </div>
          </div>

          <div className="service-item">
            <i className="fa-solid fa-user-doctor"></i>
            <div>
              <h3>Specialized Treatments</h3>
              <p>Expert doctors available for every department.</p>
            </div>
          </div>

          <div className="service-item">
            <i className="fa-solid fa-hospital"></i>
            <div>
              <h3>Modern Facilities</h3>
              <p>Clean environment with world-class medical facilities.</p>
            </div>
          </div>

          <div className="service-item">
            <i className="fa-solid fa-heart-pulse"></i>
            <div>
              <h3>Patient Care</h3>
              <p>Friendly staff focused on patient comfort and recovery.</p>
            </div>
          </div>

        </div>


        <div className="services-image">
          <img src={serviceImg} alt="Hospital" />
          <div className="services-info">
            <div className="info-box">
              <i className="fa-solid fa-user-doctor"></i>
              <h3>Expert Doctors</h3>
              <p>Highly Qualified Team</p>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-shield-heart"></i>
              <h3>Safe & Secure</h3>
              <p>Your Safety First</p>
            </div>
            <div className="info-box">
              <i className="fa-solid fa-clock"></i>
              <h3>24/7 Support</h3>
              <p>Always Available</p>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-handshake"></i>
              <h3>Trusted Care</h3>
              <p>Thousands of Happy Patients</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;