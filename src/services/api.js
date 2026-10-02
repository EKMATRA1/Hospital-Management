import axios from "axios";

// Local development ya Live Vercel dono ke liye backend URL
const BACKEND_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "" : "https://hospital-management-backend-0cea.onrender.com");

const api = axios.create({
  baseURL: BACKEND_URL,
});

export default api;