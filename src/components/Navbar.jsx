import { Link } from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(){
    return(
        <>
            <div className="top-bar">
             <div className="logo">
            <i className="fa-solid fa-hospital"></i>
                <h2>Shri HealthCare</h2>
            </div>
            <div className="right">
                <div className="phone">
                <i className="fa-solid fa-phone"></i>
                <div>
                <p>Emergency</p>
                <h4> 9905219157</h4>
            </div>
            </div>
            <Link to="/appointment"
            className="appointment-btn">
                Book Appointment
            </Link>
             </div>
             </div>

            <nav className="navbar">
            <ul className ="menu">
            <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/doctors">Doctors</Link></li>
<li><Link to="/departments">Departments</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/contact">Contact</Link></li>
<li><Link to="/patient-registration">Patient Registration</Link></li>
                </ul>
                </nav>
            </>
    );
    
}
export default Navbar;