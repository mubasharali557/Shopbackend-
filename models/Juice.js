import mongoose from "mongoose";

const juiceProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, default: "Juices" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
});

const JuiceProduct = mongoose.model("JuiceProduct", juiceProductSchema);
export default JuiceProduct;
