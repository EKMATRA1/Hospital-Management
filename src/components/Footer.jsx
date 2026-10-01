import "../styles/Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h2>🏥 Shri HealthCare</h2>
          <p>
            Shri HealthCare Hospital provides quality healthcare with
            experienced doctors, modern technology and compassionate care.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/departments">Departments</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/patient-registration">PatientRegistration</Link></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Departments</h3>
          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Orthopedics</li>
            <li>Pediatrics</li>
            <li>Emergency</li>
          </ul>
        </div>
        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            Bokaro, Jharkhand, India
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            +91 9905219157
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;