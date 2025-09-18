import mongoose from "mongoose";
const homeProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // will store file path or URL
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
}, { timestamps: true });

const HomeProduct = mongoose.model("HomeProduct", homeProductSchema);

export default HomeProduct;
