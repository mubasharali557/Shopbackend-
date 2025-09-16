import HomeProduct from "../models/HomeProduct.js";

// ✅ Get all home products
export const getHomeProducts = async (req, res) => {
  try {
    const products = await HomeProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new product
export const addHomeProduct = async (req, res) => {
  try {
    const newProduct = new HomeProduct(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update product
export const updateHomeProduct = async (req, res) => {
  try {
    const updated = await HomeProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteHomeProduct = async (req, res) => {
  try {
    await HomeProduct.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
