import HouseProduct from "../models/HouseProduct.js";
// ✅ Get all products
export const getHouseProducts = async (req, res) => {
  try {
    const products = await HouseProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new product (with image + status + customer)
export const addHouseProduct = async (req, res) => {
  try {
    const { title, price, category, status, customer } = req.body;

    const newProduct = new HouseProduct({
      title,
      price,
      category,
      status: status || "Pending",
      customer: customer || "Guest",
      image: req.file ? `uploads/${req.file.filename}` : null,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteHouseProduct = async (req, res) => {
  try {
    const deleted = await HouseProduct.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted", deleted });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
