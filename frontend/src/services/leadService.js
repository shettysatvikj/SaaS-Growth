import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const createLead = async (payload) => {
  const res = await axios.post(`${API_BASE_URL}/api/leads`, payload, {
    headers: { "Content-Type": "application/json" }
  });
  return res.data;
};