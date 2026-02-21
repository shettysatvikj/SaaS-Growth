import express from "express";
import { createLead, getLeads, getAnalytics } from "../controllers/leadController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * POST /api/leads
 */
router.post("/", createLead);

/**
 * GET /api/leads
 */
router.get("/", protect, getLeads);
router.get("/analytics", protect, getAnalytics);


export default router;
