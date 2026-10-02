import { useState } from "react";
import api from "../services/api";
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
    "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Opthamalogy",
    "Dental Care", "Pulmonology", "ENT", "General Medicine", "General Surgery",
    "Radiology", "Pathology", "Emergency", "ICU", "Physiotherepy", "Nursing Care",
  ];

  const doctors = [
    "Dr. Mira Miachel", "Dr.  Sarah Smith", "Dr. Michel Brown", "Dr. Emily White",
    "Dr. Oliva Green", "Dr. David Wilson", "Dr. James Lee", "Dr. Sophia Clark",
    "Dr. Ethan Hall", "Dr. Isabella King", "Dr. Noah Scott", "Dr. Ava Walker",
    "Dr. Benjamin Young", "Dr. Charlatte Hill", "Dr. Daniel Adams", "Dr. Grace lewis",
  ];

  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmedAppointment, setConfirmedAppointment] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    setErrorMessage(null);
    setLoading(true);

    try {
      const res = await api.post("/api/appointments/book", formData);
      const bookedData = res.data?.appointment || {
        ...formData,
        _id: "APT-" + Math.floor(100000 + Math.random() * 900000),
      };
      setConfirmedAppointment(bookedData);
      setStatusMessage({
        name: formData.name,
        department: formData.department,
        doctor: formData.doctor,
        date: formData.date,
        time: formData.time,
      });
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
    } catch (err) {
      setErrorMessage(err.response?.data?.message || err.message || "Failed to book appointment");
    } finally {
      setLoading(false);
    }
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
          <span className="small-title">BOOK APPOINTMENT</span>
          <h2>Schedule Your Visit</h2>
          <p className="appointment-desc">
            Fill in your details below and our team will confirm your appointment.
          </p>

          {statusMessage && (
            <div style={{ padding: "16px", margin: "16px 0", borderRadius: "8px", backgroundColor: "#e8f5e9", color: "#1b5e20", border: "1px solid #a5d6a7" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "8px" }}>
                ✅ Your Appointment has been booked Successfully!
              </div>
              <p style={{ margin: "4px 0", fontSize: "14px" }}>👤 Patient: <strong>{statusMessage.name}</strong></p>
              <p style={{ margin: "4px 0", fontSize: "14px" }}>🏥 Department: <strong>{statusMessage.department}</strong></p>
              <p style={{ margin: "4px 0", fontSize: "14px" }}>👨‍⚕️ Doctor: <strong>{statusMessage.doctor}</strong></p>
              <p style={{ margin: "4px 0", fontSize: "14px" }}>📅 Date: <strong>{statusMessage.date}</strong> | 🕒 Time: <strong>{statusMessage.time}</strong></p>
              <p style={{ marginTop: "8px", fontSize: "13px", color: "#2e7d32" }}>Thank you for choosing Shri HealthCare!</p>
            </div>
          )}

          {errorMessage && (
            <div style={{ padding: "14px 18px", margin: "15px 0", borderRadius: "8px", backgroundColor: "#ffebee", color: "#c62828", fontWeight: 600, border: "1px solid #ffcdd2" }}>
              ❌ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-user"></i>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-phone"></i>
                <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <i className="fa-solid fa-stethoscope"></i>
                <select name="department" value={formData.department} onChange={handleChange} required>
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={index} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-user-doctor"></i>
                <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                  <option value="">Select Doctor</option>
                  {doctors.map((doc, index) => (
                    <option key={index} value={doc}>{doc}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <i className="fa-solid fa-calendar"></i>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <i className="fa-solid fa-clock"></i>
                <select name="time" value={formData.time} onChange={handleChange} required>
                  <option value="">Select Time</option>
                  <option value="09:00 AM">09:00 AM</option><option value="09:30 AM">09:30 AM</option>
                  <option value="10:00 AM">10:00 AM</option><option value="10:30 AM">10:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option><option value="11:30 AM">11:30 AM</option>
                  <option value="12:00 PM">12:00 PM</option><option value="12:30 PM">12:30 PM</option>
                  <option value="01:00 PM">01:00 PM</option><option value="01:30 PM">01:30 PM</option>
                  <option value="02:00 PM">02:00 PM</option><option value="02:30 PM">02:30 PM</option>
                  <option value="03:00 PM">03:00 PM</option><option value="03:30 PM">03:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option><option value="04:30 PM">04:30 PM</option>
                  <option value="05:00 PM">05:00 PM</option><option value="05:30 PM">05:30 PM</option>
                  <option value="06:00 PM">06:00 PM</option>
                </select>
              </div>

              <div className="input-group">
                <i className="fa-solid fa-comment-medical"></i>
                <textarea name="message" rows="5" placeholder="Reason For Visit" value={formData.message} onChange={handleChange}></textarea>
              </div>
            </div>

            <button type="submit" className="appointment-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
              <i className="fa-solid fa-calendar-check"></i>
              {loading ? "Booking Appointment..." : "Book Appointment"}
            </button>
          </form>

          {/* Appointment Confirmation Prompt Modal */}
          {confirmedAppointment && (
            <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(15, 23, 42, 0.65)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "16px", backdropFilter: "blur(4px)" }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", maxWidth: "500px", width: "100%", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
                <div style={{ background: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)", padding: "24px 20px", color: "#ffffff", textAlign: "center" }}>
                  <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "28px" }}>
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>Appointment Confirmed!</h2>
                  <p style={{ margin: "6px 0 0", opacity: 0.9, fontSize: "14px" }}>Your visit has been scheduled successfully</p>
                </div>

                <div style={{ padding: "24px" }}>
                  <div style={{ backgroundColor: "#f0f9ff", padding: "12px 16px", borderRadius: "8px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #bae6fd" }}>
                    <span style={{ fontSize: "13px", color: "#0369a1", fontWeight: 600 }}>BOOKING REFERENCE</span>
                    <span style={{ fontSize: "14px", color: "#0c4a6e", fontWeight: "bold", fontFamily: "monospace" }}>{confirmedAppointment._id || "APT-" + Date.now().toString().slice(-6)}</span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "14px" }}>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Patient Name</span>
                      <strong style={{ color: "#0f172a" }}>{confirmedAppointment.name}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Phone Number</span>
                      <strong style={{ color: "#0f172a" }}>{confirmedAppointment.phone}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Department</span>
                      <strong style={{ color: "#0284c7" }}>{confirmedAppointment.department}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Doctor</span>
                      <strong style={{ color: "#0f172a" }}>{confirmedAppointment.doctor}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Appointment Date</span>
                      <strong style={{ color: "#0f172a" }}>📅 {confirmedAppointment.date}</strong>
                    </div>
                    <div>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Scheduled Time</span>
                      <strong style={{ color: "#0f172a" }}>🕒 {confirmedAppointment.time}</strong>
                    </div>
                    {confirmedAppointment.email && (
                      <div style={{ gridColumn: "span 2" }}>
                        <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Email Address</span>
                        <span style={{ color: "#0f172a" }}>{confirmedAppointment.email}</span>
                      </div>
                    )}
                    {confirmedAppointment.message && (
                      <div style={{ gridColumn: "span 2" }}>
                        <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Reason For Visit</span>
                        <span style={{ color: "#475569", fontStyle: "italic" }}>"{confirmedAppointment.message}"</span>
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
                    <button onClick={() => window.print()} style={{ flex: 1, padding: "10px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#334155", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                      <i className="fa-solid fa-print"></i> Print Receipt
                    </button>
                    <button onClick={() => setConfirmedAppointment(null)} style={{ flex: 1, padding: "10px 16px", borderRadius: "8px", border: "none", backgroundColor: "#0284c7", color: "#ffffff", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                      <i className="fa-solid fa-check"></i> Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Appointment;