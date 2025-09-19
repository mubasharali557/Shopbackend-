import SkinCare from "../models/SkinCare.js";
// ✅ Get all skin care products
export const getSkinCare = async (req, res) => {
  try {
    const products = await SkinCare.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new product with image upload
export const addSkinCare = async (req, res) => {
  try {
    const { title, category, price, rating, reviews } = req.body;

    const newProduct = new SkinCare({
      title,
      category: category || "SkinCare",
      price,
      rating: rating || 0,
      reviews: reviews || 0,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image, // handle file upload
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update product with image upload
export const updateSkinCare = async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
      image: req.file ? `/uploads/${req.file.filename}` : req.body.image,
    };

    const updatedProduct = await SkinCare.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
    });

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteSkinCare = async (req, res) => {
  try {
    const deletedProduct = await SkinCare.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
