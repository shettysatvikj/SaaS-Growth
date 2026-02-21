import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  businessType: {
    type: String,
    required: true
  },
  revenueRange: {
    type: String,
    required: true
  },
  adBudget: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0
  },
  priority: {
    type: String,
    default: "Low"
  },

  // 🔥 ADD THESE NEW FIELDS HERE
  conversionProbability: {
    type: Number,
    default: 0
  },
  estimatedValue: {
    type: Number,
    default: 0
  },
  recommendedAction: {
    type: String
  }

}, {
  timestamps: true
});

export const Lead = mongoose.model("Lead", leadSchema);
