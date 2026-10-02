import express from "express";
import { registerPatient } from "../controllers/patientcontroller.js";

const router = express.Router();

// Register Patient
router.post("/register", registerPatient);

export default router;