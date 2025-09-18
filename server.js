import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import authRoutes from "./routes/authRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import milkProductRoutes from "./routes/milkProductRoutes.js";
import bodyWashRoutes from "./routes/bodyWashRoutes.js";
import toothBrushRoutes from "./routes/toothBrushRoutes.js";
import homeProductRoutes from "./routes/homeProductRoutes.js";
import cookingOilRoutes from "./routes/cookingOilRoutes.js";
import skinCareRoutes from "./routes/skinCareRoutes.js";
import houseProductRoutes from "./routes/houseProductRoutes.js";
import juiceRoutes from "./routes/juiceRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(cors());

// 👉 Serve uploaded images
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));


// Ensure uploads folder exists
import fs from "fs";
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Created uploads folder");
}

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/products", productRoutes);
app.use("/api", orderRoutes);
app.use("/api/milk-products", milkProductRoutes);
app.use("/api/body-washes", bodyWashRoutes);
app.use("/api/toothbrushes", toothBrushRoutes);
app.use("/api/home-products", homeProductRoutes);
app.use("/api/cooking-oil", cookingOilRoutes);
app.use("/api/skincare", skinCareRoutes);
app.use("/api/house-products", houseProductRoutes);
app.use("/api/juices", juiceRoutes);

// DB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("MongoDB Error:", err));
