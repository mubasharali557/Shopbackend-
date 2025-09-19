import MilkProduct from "../models/MilkProduct.js";

// ✅ Get all milk products
export const getMilkProducts = async (req, res) => {
  try {
    const products = await MilkProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single milk product by ID
export const getMilkProductById = async (req, res) => {
  try {
    const product = await MilkProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Milk product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new milk product
export const addMilkProduct = async (req, res) => {
  try {
    const { title, price, category, rating, reviews } = req.body;

    const milkProduct = new MilkProduct({
      title,
      price,
      category,
      rating,
      reviews,
      image: req.file ? `/uploads/${req.file.filename}` : null, // Save image URL
    });

    const savedProduct = await milkProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update milk product
export const updateMilkProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await MilkProduct.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Milk product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete milk product
export const deleteMilkProduct = async (req, res) => {
  try {
    const deletedProduct = await MilkProduct.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Milk product not found" });
    res.json({ message: "Milk product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
