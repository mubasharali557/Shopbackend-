import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";



dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/delivery", deliveryRoutes);
app.use("/api/products", productRoutes);
app.use("/api", orderRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
})
.catch(err => console.error(err));
