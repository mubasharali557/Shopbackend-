import mongoose from "mongoose";

const bodyWashSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "Body Washes" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
});

const BodyWash = mongoose.model("BodyWash", bodyWashSchema);
export default BodyWash;
 