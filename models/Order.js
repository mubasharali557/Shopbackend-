import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  cart: [
    {
      id: String,
      title: String,
      price: Number,
      qty: Number,
    },
  ],
  formData: {
    email: String,
    firstName: String,
    lastName: String,
    street: String,
    country: String,
    state: String,
    city: String,
    postalCode: String,
    phone: String,
  },
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
