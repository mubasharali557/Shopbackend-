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

// ✅ Add new product
export const addSkinCare = async (req, res) => {
  const { title, image, category, price, rating, reviews } = req.body;

  try {
    const newProduct = new SkinCare({
      title,
      image,
      category,
      price,
      rating,
      reviews
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update product
export const updateSkinCare = async (req, res) => {
  try {
    const updatedProduct = await SkinCare.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete product
export const deleteSkinCare = async (req, res) => {
  try {
    await SkinCare.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
