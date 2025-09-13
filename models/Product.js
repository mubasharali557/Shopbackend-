import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    images: { type: [String], required: true }, // multiple images instead of single "image"
    category: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number }, // optional: keep track of old price
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
