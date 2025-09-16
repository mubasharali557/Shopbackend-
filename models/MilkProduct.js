import mongoose from "mongoose";

const milkProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
});

const MilkProduct = mongoose.model("MilkProduct", milkProductSchema);
export default MilkProduct;
