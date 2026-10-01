import Patient from "../models/Patient.js";

// Register Patient
export const registerPatient = async (req, res) => {
  try {
    const patient = new Patient(req.body);

    await patient.save();

    res.status(201).json({
      success: true,
      message: "Patient Registered Successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};