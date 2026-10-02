import "../styles/PatientRegistration.css";
import registrationImg from "../assets/images/patient-registration.jpg";
import { useState } from "react";
import api from "../services/api";

function PatientRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    guardian: "",
    gender: "",
    dob: "",
    age: "",
    blood: "",
    mobile: "",
    email: "",
    address: "",
    aadhaar: "",
    department: "",
    doctor: "",
    emergency: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [confirmedPatient, setConfirmedPatient] = useState(null);
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
      const res = await api.post("/api/patients/register", formData);
      const registeredData = res.data?.patient || {
        ...formData,
        _id: "REG-" + Math.floor(100000 + Math.random() * 900000),
      };
      setConfirmedPatient(registeredData);
      setStatusMessage("✅ Patient Registered Successfully!");

      setFormData({
        fullName: "",
        guardian: "",
        gender: "",
        dob: "",
        age: "",
        blood: "",
        mobile: "",
        email: "",
        address: "",
        aadhaar: "",
        department: "",
        doctor: "",
        emergency: "",
      });
    } catch (error) {
      setErrorMessage("❌ Error: " + (error.response?.data?.message || error.message || "Failed to register"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="patient-page">
      {/* LEFT SIDE */}
      <div className="patient-left">
        <img src={registrationImg} alt="Hospital" className="patient-image" />
        <div className="why-card">
          <h2>Why Register?</h2>
          <ul>
            <li><i className="fa-solid fa-circle-check"></i> Quick appointment booking</li>
            <li><i className="fa-solid fa-circle-check"></i> Easy access to medical history</li>
            <li><i className="fa-solid fa-circle-check"></i> Faster consultation & billing</li>
            <li><i className="fa-solid fa-circle-check"></i> Better healthcare experience</li>
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="patient-right">
        <div className="patient-header">
          <div>
            <h1>PATIENT REGISTRATION</h1>
            <p>Please fill in the details below to register</p>
          </div>
          <div className="header-icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>
        </div>

        {statusMessage && (
          <div style={{ padding: "14px 18px", margin: "15px 0", borderRadius: "8px", backgroundColor: "#e8f5e9", color: "#2e7d32", fontWeight: 600, border: "1px solid #c8e6c9" }}>
            {statusMessage}
          </div>
        )}
        {errorMessage && (
          <div style={{ padding: "14px 18px", margin: "15px 0", borderRadius: "8px", backgroundColor: "#ffebee", color: "#c62828", fontWeight: 600, border: "1px solid #ffcdd2" }}>
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="patient-form">
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input type="text" name="fullName" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} required />
            </div>
          </div>

          {/* Guardian */}
          <div className="form-group">
            <label>Guardian Name</label>
            <div className="input-box">
              <i className="fa-solid fa-user-group"></i>
              <input type="text" name="guardian" placeholder="Father / Husband Name" value={formData.guardian} onChange={handleChange} />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender *</label>
            <div className="input-box">
              <i className="fa-solid fa-venus-mars"></i>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* DOB */}
          <div className="form-group">
            <label>Date of Birth</label>
            <div className="input-box">
              <i className="fa-solid fa-calendar-days"></i>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age *</label>
            <div className="input-box">
              <i className="fa-solid fa-arrow-up-1-9"></i>
              <input type="number" name="age" placeholder="Enter age" value={formData.age} onChange={handleChange} required />
            </div>
          </div>

          {/* Blood Group */}
          <div className="form-group">
            <label>Blood Group</label>
            <div className="input-box">
              <i className="fa-solid fa-droplet"></i>
              <select name="blood" value={formData.blood} onChange={handleChange}>
                <option value="">Select Blood Group</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
              </select>
            </div>
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number *</label>
            <div className="input-box">
              <i className="fa-solid fa-phone"></i>
              <input type="tel" name="mobile" placeholder="10-digit mobile number" value={formData.mobile} onChange={handleChange} required />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" name="email" placeholder="patient@example.com" value={formData.email} onChange={handleChange} />
            </div>
          </div>

          {/* Address */}
          <div className="form-group">
            <label>Address</label>
            <div className="input-box">
              <i className="fa-solid fa-location-dot"></i>
              <input type="text" name="address" placeholder="Full address" value={formData.address} onChange={handleChange} />
            </div>
          </div>

          {/* Aadhaar */}
          <div className="form-group">
            <label>Aadhaar Number</label>
            <div className="input-box">
              <i className="fa-solid fa-id-card"></i>
              <input type="text" name="aadhaar" placeholder="12-digit Aadhaar" value={formData.aadhaar} onChange={handleChange} />
            </div>
          </div>

          {/* Department */}
          <div className="form-group">
            <label>Department *</label>
            <div className="input-box">
              <i className="fa-solid fa-stethoscope"></i>
              <select name="department" value={formData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option>Cardiology</option><option>Neurology</option><option>Orthopedics</option>
                <option>Pediatrics</option><option>Opthamalogy</option><option>Dental Care</option>
                <option>Pulmonology</option><option>ENT</option><option>General Medicine</option>
                <option>General Surgery</option><option>Radiology</option><option>Pathology</option>
                <option>Emergency</option><option>ICU</option><option>Physiotherepy</option><option>Nursing Care</option>
              </select>
            </div>
          </div>

          {/* Doctor */}
          <div className="form-group">
            <label>Doctor *</label>
            <div className="input-box">
              <i className="fa-solid fa-user-doctor"></i>
              <select name="doctor" value={formData.doctor} onChange={handleChange} required>
                <option value="">Select Doctor</option>
                <option>Dr. Mira Miachel</option><option>Dr. Sarah Smith</option><option>Dr. Michel Brown</option>
                <option>Dr. Emily White</option><option>Dr. Oliva Green</option><option>Dr. David Wilson</option>
                <option>Dr. James Lee</option><option>Dr. Sophia Clark</option><option>Dr. Ethan Hall</option>
                <option>Dr. Isabella King</option><option>Dr. Noah Scott</option><option>Dr. Ava Walker</option>
                <option>Dr. Benjamin Young</option><option>Dr. Charlatte Hill</option><option>Dr. Daniel Adams</option>
                <option>Dr. Grace lewis</option>
              </select>
            </div>
          </div>

          {/* Emergency */}
          <div className="form-group">
            <label>Emergency Contact *</label>
            <div className="input-box">
              <i className="fa-solid fa-phone-volume"></i>
              <input type="tel" name="emergency" placeholder="Emergency Contact Number" value={formData.emergency} onChange={handleChange} required />
            </div>
          </div>

          <button className="register-btn" type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
            <i className="fa-solid fa-user-plus"></i>
            {loading ? "Registering Patient..." : "Register Patient"}
          </button>
        </form>

        {/* Confirmation Slip / Prompt Modal */}
        {confirmedPatient && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(15, 23, 42, 0.65)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: "16px", backdropFilter: "blur(4px)" }}>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", maxWidth: "520px", width: "100%", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", overflow: "hidden", border: "1px solid #e2e8f0" }}>
              <div style={{ background: "linear-gradient(135deg, #10b981 0%, #059669 100%)", padding: "24px 20px", color: "#ffffff", textAlign: "center" }}>
                <div style={{ width: "56px", height: "56px", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: "28px" }}>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "bold" }}>Registration Successful!</h2>
                <p style={{ margin: "6px 0 0", opacity: 0.9, fontSize: "14px" }}>Patient has been registered in the Hospital Database</p>
              </div>

              <div style={{ padding: "24px" }}>
                <div style={{ backgroundColor: "#f8fafc", padding: "12px 16px", borderRadius: "8px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e2e8f0" }}>
                  <span style={{ fontSize: "13px", color: "#64748b", fontWeight: 600 }}>REGISTRATION ID</span>
                  <span style={{ fontSize: "14px", color: "#0f172a", fontWeight: "bold", fontFamily: "monospace" }}>{confirmedPatient._id || "REG-" + Date.now().toString().slice(-6)}</span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", fontSize: "14px" }}>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Full Name</span>
                    <strong style={{ color: "#0f172a" }}>{confirmedPatient.fullName}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Mobile No</span>
                    <strong style={{ color: "#0f172a" }}>{confirmedPatient.mobile}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Department</span>
                    <strong style={{ color: "#059669" }}>{confirmedPatient.department || "General"}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Doctor</span>
                    <strong style={{ color: "#0f172a" }}>{confirmedPatient.doctor || "Consultant"}</strong>
                  </div>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Age / Gender</span>
                    <span style={{ color: "#0f172a" }}>{confirmedPatient.age ? `${confirmedPatient.age} yrs` : "N/A"} ({confirmedPatient.gender || "N/A"})</span>
                  </div>
                  <div>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Blood Group</span>
                    <span style={{ color: "#0f172a" }}>{confirmedPatient.blood || "N/A"}</span>
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Emergency Contact</span>
                    <span style={{ color: "#0f172a" }}>{confirmedPatient.emergency}</span>
                  </div>
                  {confirmedPatient.address && (
                    <div style={{ gridColumn: "span 2" }}>
                      <span style={{ color: "#64748b", fontSize: "12px", display: "block" }}>Address</span>
                      <span style={{ color: "#0f172a" }}>{confirmedPatient.address}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
                  <button onClick={() => window.print()} style={{ flex: 1, padding: "10px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", backgroundColor: "#f8fafc", color: "#334155", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <i className="fa-solid fa-print"></i> Print Slip
                  </button>
                  <button onClick={() => setConfirmedPatient(null)} style={{ flex: 1, padding: "10px 16px", borderRadius: "8px", border: "none", backgroundColor: "#059669", color: "#ffffff", fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <i className="fa-solid fa-check"></i> Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientRegistration;