import mongoose from "mongoose";

const toothBrushSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // stores uploaded file path like /uploads/1234-brush.png
      default: "",
    },
    category: {
      type: String,
      default: "Toothbrushes",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  { timestamps: true } // ✅ adds createdAt and updatedAt automatically
);

const ToothBrush = mongoose.model("ToothBrush", toothBrushSchema);
export default ToothBrush;
