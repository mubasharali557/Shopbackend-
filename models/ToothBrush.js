import mongoose from "mongoose";

const toothBrushSchema = new mongoose.Schema({
  title: String,
  image: String,
  category: String,
  price: Number,
  rating: Number,
  reviews: Number,
});

const ToothBrush = mongoose.model("ToothBrush", toothBrushSchema);
export default ToothBrush;
