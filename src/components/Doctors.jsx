import "../styles/Doctors.css";

import d1 from "../assets/images/doctor1.jpg";
import d2 from "../assets/images/doctor2.jpg";
import d3 from "../assets/images/doctor3.jpg";
import d4 from "../assets/images/doctor4.jpg";
import d5 from "../assets/images/doctor5.jpg";
import d6 from "../assets/images/doctor6.jpg";
import d7 from "../assets/images/doctor7.jpg";
import d8 from "../assets/images/doctor8.jpg";
import d9 from "../assets/images/doctor9.jpg";
import d10 from "../assets/images/doctor10.jpg";
import d11 from "../assets/images/doctor11.jpg";
import d12 from "../assets/images/doctor12.jpg";
import d13 from "../assets/images/doctor13.jpg";
import d14 from "../assets/images/doctor14.jpg";
import d15 from "../assets/images/doctor15.jpg";
import d16 from "../assets/images/doctor16.jpg";

const doctors = [
  { image: d1, name: "Dr. Mira Michcel", specialist: "Cardiologist" },
  { image: d2, name: "Dr. Sarah Smith", specialist: "Neurologist" },
  { image: d3, name: "Dr. Michael Brown", specialist: "Orthopedic" },
  { image: d4, name: "Dr. Emily White", specialist: "Pediatrician" },
  { image: d5, name: "Dr. Olivia Green", specialist: "Gynecologist" },
  { image: d6, name: "Dr. David Wilson", specialist: "Dentist" },
  { image: d7, name: "Dr. James Lee", specialist: "Urologist" },
  { image: d8, name: "Dr. Sophia Clark", specialist: "Dermatologist" },
  { image: d9, name: "Dr. Ethan Hall", specialist: "ENT Specialist" },
  { image: d10, name: "Dr. Isabella King", specialist: "Physician" },
  { image: d11, name: "Dr. Noah Scott", specialist: "Psychiatrist" },
  { image: d12, name: "Dr. Ava Walker", specialist: "Radiologist" },
  { image: d13, name: "Dr. Benjamin Young", specialist: "Surgeon" },
  { image: d14, name: "Dr. Charlotte Hill", specialist: "Oncologist" },
  { image: d15, name: "Dr. Daniel Adams", specialist: "Nephrologist" },
  { image: d16, name: "Dr. Grace Lewis", specialist: "Pulmonologist" }
];

function Doctors() {
  return (
    <>
      <section className="doctor-banner">
        <div className="doctor-banner-content">
          <h1>Our Doctors</h1>
        </div>
      </section>

      <section className="doctor-section">
        <div className="doctor-grid">
          {doctors.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <img src={doctor.image} alt={doctor.name} />

              <div className="doctor-info">
                <h3>{doctor.name}</h3>

                <p>{doctor.specialist}</p>

                <div className="rating">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Doctors;