
import Product from "../models/Product.js";
import multer from "multer";
import path from "path";

// ✅ Configure Multer storage for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists at root
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

export const upload = multer({ storage });

// ✅ Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new product (supports multiple image uploads)
export const addProduct = async (req, res) => {
  try {
    const { title, category, price, oldPrice, rating, reviews } = req.body;

    // handle multiple images uploaded via Multer
    const images = req.files ? req.files.map((file) => `/uploads/${file.filename}`) : [];

    const newProduct = new Product({
      title,
      category,
      price,
      oldPrice,
      rating,
      reviews,
      images,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update product (full update)
export const updateProduct = async (req, res) => {
  try {
    const { title, category, price, oldPrice, rating, reviews } = req.body;

    // If images are uploaded, map them, else keep existing images
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => `/uploads/${file.filename}`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { title, category, price, oldPrice, rating, reviews, ...(images.length > 0 && { images }) },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Update only price & images (PATCH)
export const updatePriceImage = async (req, res) => {
  try {
    const { price, oldPrice } = req.body;

    // If images are uploaded, map them
    let images = [];
    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => `/uploads/${file.filename}`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { price, oldPrice, ...(images.length > 0 && { images }) },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
