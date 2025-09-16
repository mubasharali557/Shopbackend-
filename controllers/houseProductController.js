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

// ✅ Get a single product by ID
export const getHouseProductById = async (req, res) => {
  try {
    const product = await HouseProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add a new product
export const addHouseProduct = async (req, res) => {
  try {
    const product = new HouseProduct(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update a product by ID
export const updateHouseProduct = async (req, res) => {
  try {
    const updatedProduct = await HouseProduct.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete a product by ID
export const deleteHouseProduct = async (req, res) => {
  try {
    const deleted = await HouseProduct.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
