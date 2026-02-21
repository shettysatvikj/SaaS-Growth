import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import leadRoutes from "./routes/leadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: [
    "https://saa-s-growth.vercel.app",
    "https://saa-s-growth-78yu.vercel.app",
    "http://localhost:5173"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Important: explicitly handle preflight
app.options("*", cors());

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Routes
app.use("/api/leads", leadRoutes);

app.use("/api/admin", adminRoutes);


// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
