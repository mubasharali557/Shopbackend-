
import mongoose from "mongoose";

const juiceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // will store path
  category: { type: String, default: "Juices" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
});

const Juice = mongoose.model("Juice", juiceSchema);
export default Juice;
