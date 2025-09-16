import mongoose from "mongoose";

const skinCareSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "Skin Care" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 }
});

const SkinCare = mongoose.model("SkinCare", skinCareSchema);

export default SkinCare;
