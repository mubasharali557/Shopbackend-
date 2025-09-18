import mongoose from "mongoose";

const bodyWashSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    category: { type: String, default: "Body Washes" },
    price: { type: Number, required: true, min: 0 },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0, min: 0 },
  },
  { timestamps: true }
);

const BodyWash = mongoose.model("BodyWash", bodyWashSchema);
export default BodyWash;
