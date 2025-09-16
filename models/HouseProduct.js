import mongoose from "mongoose";

const HouseProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, default: "/default.jpg" },
  category: { type: String, default: "House Cleaning" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.HouseProduct || mongoose.model("HouseProduct", HouseProductSchema);
