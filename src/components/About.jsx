import "../styles/About.css";
import hospital from "../assets/images/hospital.png";
function About(){
    return(
        <>
        <section className="about-banner">
            <div className="banner-content">
                <h1>About Our Hospital</h1>
            </div>
        </section>
        <section className="about-container">
            <div className="about-img">
                <img src={hospital} alt="Hospital" />
            </div>
            <div className="about-text">
                <h2>About Shri Healthcare</h2>
                <p>Shri Healthcare Hospital is a multi-speacilityhospital 
                that provide comperhensive healthcare services to patients.
                We are commited to providing quality healthcare with compassion and 
                advance medical technology.
                </p>
                <ul>
                    <li><i className="fa-solid fa-check"></i>Advance Medical Technology</li>
                    <li><i className="fa-solid fa-check"></i>Certified and Experinced Doctors</li>
                    <li><i className="fa-solid fa-check"></i>Emergency Services</li>
                    <li><i className="fa-solid fa-check"></i>Patient-Centered Care</li>
                </ul>
            </div>
        </section>

        <section className="stats-section">
            <div className="stat-box">
                <i className="fa-regular fa-circle-check"></i>
                <h2>10+</h2>
                <p>Years of Experience</p>
            </div>
            <div className="stat-box">
                <i className="fa-solid fa-user-doctor"></i>
                <h2>50+</h2>
                <p>Expert Doctors</p>
            </div>
             <div className="stat-box">
                <i className="fa-solid fa-hospital-user"></i>
                <h2>15+</h2>
                <p>Departments</p>
            </div>
             <div className="stat-box">
                <i className="fa-regular fa-heart"></i>
                <h2>10000+</h2>
                <p>Happy Patients</p>
            </div>
  
        </section>
        </>
    );
}
export default About;