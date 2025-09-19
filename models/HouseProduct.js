import mongoose from "mongoose";

const houseProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, default: "House Products" },
  customer: { type: String, default: "Guest" },
  status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
  image: { type: String },
});

export default mongoose.model("HouseProduct", houseProductSchema);
