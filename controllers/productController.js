import Product from "../models/Product.js";

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD product
export const addProduct = async (req, res) => {
  try {
    const { title, images, category, price, oldPrice, rating, reviews } = req.body;
    const newProduct = new Product({ title, images, category, price, oldPrice, rating, reviews });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE product (full update)
export const updateProduct = async (req, res) => {
  try {
    const { title, images, category, price, oldPrice, rating, reviews } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { title, images, category, price, oldPrice, rating, reviews },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE only price & images (PATCH)
export const updatePriceImage = async (req, res) => {
  try {
    const { price, oldPrice, images } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { price, oldPrice, images },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
