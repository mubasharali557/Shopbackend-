import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    images: { type: [String], required: true }, // array of image paths
    category: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number }, // optional: track previous price
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
  },
  { timestamps: true } // auto add createdAt and updatedAt
);

export default mongoose.model("Product", productSchema);
