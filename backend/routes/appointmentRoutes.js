import express from "express";
import { bookAppointment } from "../controllers/appointmentcontroller.js";

const router = express.Router();

// Book Appointment
router.post("/book", bookAppointment);

export default router;