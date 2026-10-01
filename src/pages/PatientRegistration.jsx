import "../styles/PatientRegistration.css";
import registrationImg from "../assets/images/patient-registration.jpg";
import { useState } from "react";
import axios from "axios";

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/patients/register",
      formData
    );
    alert("✅ Patient Registered Successfully!");

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
    alert("❌ Error: " + error.response?.data?.message);
  }
};
  return (
    <div className="patient-page">

      {/* LEFT SIDE */}

      <div className="patient-left">

        <img
          src={registrationImg}
          alt="Hospital"
          className="patient-image"
        />

        <div className="why-card">

          <h2>Why Register?</h2>

          <ul>

            <li>
              <i className="fa-solid fa-circle-check"></i>
              Quick appointment booking
            </li>

            <li>
              <i className="fa-solid fa-circle-check"></i>
              Easy access to medical history
            </li>

            <li>
              <i className="fa-solid fa-circle-check"></i>
              Faster consultation & billing
            </li>

            <li>
              <i className="fa-solid fa-circle-check"></i>
              Better healthcare experience
            </li>

          </ul>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="patient-right">

        <div className="patient-header">

          <div>

            <h1>PATIENT REGISTRATION</h1>

            <p>
              Please fill in the details below to register
            </p>

          </div>

          <div className="header-icon">
            <i className="fa-solid fa-user-plus"></i>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="patient-form">
            {/* Full Name */}
          <div className="form-group">
            <label>Full Name *</label>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="fullName"
                placeholder="Enter full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Guardian */}
          <div className="form-group">
            <label>Father / Guardian Name *</label>
            <div className="input-box">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                name="guardian"
                placeholder="Enter father / guardian name"
                value={formData.guardian}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender *</label>
            <div className="input-box">
              <i className="fa-solid fa-venus-mars"></i>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* DOB */}
          <div className="form-group">
            <label>Date of Birth *</label>
            <div className="input-box">
              <i className="fa-solid fa-calendar-days"></i>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Age */}
          <div className="form-group">
            <label>Age *</label>
            <div className="input-box">
              <i className="fa-solid fa-calendar"></i>
              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Blood Group */}
          <div className="form-group">
            <label>Blood Group</label>
            <div className="input-box">
              <i className="fa-solid fa-droplet"></i>
              <select
                name="blood"
                value={formData.blood}
                onChange={handleChange}
              >
                <option value="">Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number *</label>
            <div className="input-box">
              <i className="fa-solid fa-phone"></i>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-box">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address */}
          <div className="form-group full-width">
            <label>Address *</label>
            <div className="input-box">
              <i className="fa-solid fa-location-dot"></i>
              <input
                type="text"
                name="address"
                placeholder="Enter Full Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Aadhaar */}
          <div className="form-group">
            <label>Aadhaar Number</label>
            <div className="input-box">
              <i className="fa-solid fa-id-card"></i>
              <input
                type="text"
                name="aadhaar"
                placeholder="Enter Aadhaar Number"
                value={formData.aadhaar}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Department *</label>
            <div className="input-box">
              <i className="fa-solid fa-hospital"></i>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required>
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Opthalmology</option>
                <option>Dental Care</option>
                <option>Pulmonology</option>
                <option>ENT</option>
                <option>General Medicine</option>
                <option>General Surgery</option>
                <option>Radiology</option>
                <option>Pathology</option>
                <option>Emergency</option>
                <option>ICU</option>
                <option>Physiotherapy</option>
                <option>Nursing care</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Preferred Doctor</label>
            <div className="input-box">
              <i className="fa-solid fa-user-doctor"></i>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}>
                <option value="">Select Doctor</option>
                <option>Dr. Mira Miachel</option>
                <option>Dr. Sarah Smith</option>
                <option>Dr. Michel Brown</option>
                <option>Dr. Emily White</option>
                <option>Dr. Oliva Green</option>
                <option>Dr. David Wilson</option>
                <option>Dr. James Lee</option>
                <option>Dr. Sophia Clark</option>
                <option>Dr. Ethan Hall</option>
                <option>Dr. Isabella King</option>
                <option>Dr. Noah Scott</option>
                <option>Dr. Ava Walker</option>
                <option>Dr. Benjamin Young</option>
                <option>Dr. Charlatte Hill</option>
                <option>Dr. Daniel Adams</option>
                <option>Dr. Grace lewis</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Emergency Contact *</label>
            <div className="input-box">
              <i className="fa-solid fa-phone-volume"></i>
              <input
                type="tel"
                name="emergency"
                placeholder="Emergency Contact Number"
                value={formData.emergency}
                onChange={handleChange}
                required />
            </div>
          </div>

          <button className="register-btn" type="submit">
            <i className="fa-solid fa-user-plus"></i>
            Register Patient
          </button>

        </form>
      </div>
    </div>
  );
}
export default PatientRegistration;