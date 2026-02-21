import { Lead } from "../models/Lead.js";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;

const validateLeadPayload = (payload) => {
  const errors = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Name is required and must be at least 2 characters.";
  }

  if (!payload.email || !emailRegex.test(payload.email)) {
    errors.email = "A valid email address is required.";
  }

  if (!payload.businessType) {
    errors.businessType = "Business type is required.";
  }

  if (!payload.revenueRange) {
    errors.revenueRange = "Monthly revenue range is required.";
  }

  if (!payload.adBudget) {
    errors.adBudget = "Monthly ad budget is required.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const createLead = async (req, res, next) => {
  try {
    const { isValid, errors } = validateLeadPayload(req.body);
    if (!isValid) {
      return res.status(400).json({ success: false, errors });
    }

    const { name, email, businessType, revenueRange, adBudget } = req.body;

    // ----------------------------
    // Lead Scoring Logic
    // ----------------------------
    let score = 0;

    // Revenue scoring
    if (revenueRange === "50k-100k") score += 10;
    if (revenueRange === "100k+") score += 20;

    // Ad budget scoring
    if (adBudget === "5k-10k") score += 10;
    if (adBudget === "10k+") score += 20;

    // Business type scoring
    if (businessType === "Ecommerce") score += 10;

    // Determine priority
    let priority = "Low";
    if (score >= 30) priority = "Hot";
    else if (score >= 15) priority = "Medium";

    // ----------------------------
    // Conversion probability
    // ----------------------------
    const conversionProbability = Math.min(90, score * 3);

    // ----------------------------
    // Estimated value
    // ----------------------------
    let estimatedValue = 0;
    if (revenueRange === "50k-100k") estimatedValue = 5000;
    if (revenueRange === "100k+") estimatedValue = 10000;

    // ----------------------------
    // Recommended action
    // ----------------------------
    let recommendedAction = "Send nurture email";

    if (priority === "Hot") {
      recommendedAction = "Schedule sales call immediately";
    } else if (priority === "Medium") {
      recommendedAction = "Send case study + follow up";
    }

    // ----------------------------
    // NOW create the lead
    // ----------------------------
    const lead = await Lead.create({
      name,
      email,
      businessType,
      revenueRange,
      adBudget,
      score,
      priority,
      conversionProbability,
      estimatedValue,
      recommendedAction
    });

    return res.status(201).json({
      success: true,
      data: {
        id: lead._id,
        createdAt: lead.createdAt
      }
    });

  } catch (err) {
    next(err);
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const getAnalytics = async (req, res) => {
  try {
    const leads = await Lead.find();

    const totalLeads = leads.length;
    const hotLeads = leads.filter(l => l.priority === "Hot").length;
    const totalValue = leads.reduce((sum, l) => sum + l.estimatedValue, 0);
    const avgScore = totalLeads > 0
      ? leads.reduce((sum, l) => sum + l.score, 0) / totalLeads
      : 0;

    res.json({
      success: true,
      data: {
        totalLeads,
        hotLeads,
        totalValue,
        avgScore: Math.round(avgScore)
      }
    });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
