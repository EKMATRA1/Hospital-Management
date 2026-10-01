import { useState } from "react";
import axios from "axios";
import "../styles/Appointment.css";
import appointmentImg from "../assets/images/appointment.jpg";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const departments = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Opthamalogy",
    "Dental Care",
    "Pulmonology",
    "ENT",
    "General Medicine",
    "General Surgery",
    "Radiology",
    "Pathology",
    "Emergency",
    "ICU",
    "Physiotherepy",
    "Nursing Care",
  ];

  const doctors = [
    "Dr. Mira Miachel",
    "Dr.  Sarah Smith",
    "Dr. Michel Brown",
    "Dr. Emily White",
    "Dr. Oliva Green",
    "Dr. David Wilson",
    "Dr. James Lee",
    "Dr. Sophia Clark",
    "Dr. Ethan Hall",
    "Dr. Isabella King",
    "Dr. Noah Scott",
    "Dr. Ava Walker",
    "Dr. Benjamin Young",
    "Dr. Charlatte Hill",
    "Dr. Daniel Adams",
    "Dr. Grace lewis",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/appointments/book", 
      formData
    )
    alert(
`✅ Your Appointment has been booked Successfully!

👤 Patient: ${formData.name}
🏥 Department: ${formData.department}
👨‍⚕️ Doctor: ${formData.doctor}
📅 Date: ${formData.date}
🕒 Time: ${formData.time}

Thank You for choosing Shri HealthCare!`
);
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <>
      <section className="appointment-hero">
        <div className="appointment-overlay">
          <h1>Book Appointment</h1>
        </div>
      </section>

      <section className="appointment-section">
        <div className="appointment-image">
          <img src={appointmentImg} alt="Appointment" />
          <div className="appointment-info">
            <div className="info-box">
              <i className="fa-solid fa-user-doctor"></i>
              <div>
                <h4>Expert Doctors</h4>
                <p>Experienced Specialists</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-heart-pulse"></i>
              <div>
                <h4>Trusted Care</h4>
                <p>Quality Healthcare</p>
              </div>
            </div>

            <div className="info-box">
              <i className="fa-solid fa-clock"></i>
              <div>
                <h4>24×7 Emergency</h4>
                <p>Always Available</p>
              </div>
            </div>

          </div>
        </div>

        <div className="appointment-form">
          <span className="small-title">
            BOOK APPOINTMENT
          </span>

          <h2>Schedule Your Visit</h2>
          <p className="appointment-desc">
            Fill in your details below and our team will confirm your appointment.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-phone"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <i className="fa-solid fa-building"></i>

                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-user-doctor"></i>

                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}

                </select>
              </div>

              <div className="input-group">
                <i className="fa-solid fa-calendar-days"></i>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-clock"></i>
                <select
  name="time"
  value={formData.time}
  onChange={handleChange}
  required
>
  <option value="">Select Time</option>
  <option value="09:00 AM">09:00 AM</option>
  <option value="09:30 AM">09:30 AM</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="10:30 AM">10:30 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="11:30 AM">11:30 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="12:30 PM">12:30 PM</option>
  <option value="01:00 PM">01:00 PM</option>
  <option value="01:30 PM">01:30 PM</option>
  <option value="02:00 PM">02:00 PM</option>
  <option value="02:30 PM">02:30 PM</option>
  <option value="03:00 PM">03:00 PM</option>
  <option value="03:30 PM">03:30 PM</option>
  <option value="04:00 PM">04:00 PM</option>
  <option value="04:30 PM">04:30 PM</option>
  <option value="05:00 PM">05:00 PM</option>
  <option value="05:30 PM">05:30 PM</option>
  <option value="06:00 PM">06:00 PM</option>
</select>
              </div>

              <div className="input-group">
                <i className="fa-solid fa-comment-medical"></i>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Reason For Visit"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>

              </div>
            </div>

            <button
              type="submit"
              className="appointment-btn">
              <i className="fa-solid fa-calendar-check"></i>
              Book Appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Appointment;