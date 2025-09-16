import mongoose from "mongoose";

const cookingOilSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "Cooking Oil" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 }
}, { timestamps: true });

const CookingOil = mongoose.model("CookingOil", cookingOilSchema);
export default CookingOil;
