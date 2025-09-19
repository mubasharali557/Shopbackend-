import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import fs from "fs";
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

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// 👉 Setup uploads folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "uploads");
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));


// Create uploads folder if it doesn’t exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Created uploads folder");
}

// 👉 Serve uploaded images (http://localhost:5000/uploads/filename.jpg)
app.use("/uploads", express.static(uploadDir));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/milk-products", milkProductRoutes);
app.use("/api/body-washes", bodyWashRoutes);
app.use("/api/toothbrushes", toothBrushRoutes);
app.use("/api/home-products", homeProductRoutes);
app.use("/api/cooking-oil", cookingOilRoutes);
app.use("/api/skincare", skinCareRoutes);
app.use("/api/house-products", houseProductRoutes);
app.use("/api/juices", juiceRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));
