import mongoose from "mongoose";

const deliverySchema = new mongoose.Schema({
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional
}, { timestamps: true });

export default mongoose.model("Delivery", deliverySchema);
