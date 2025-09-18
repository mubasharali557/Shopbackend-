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

// ✅ Add new product (with image)
export const addHomeProduct = async (req, res) => {
  try {
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "/default.jpg";

    const newProduct = new HomeProduct({
      title: req.body.title,
      category: req.body.category || "Home Products",
      price: req.body.price,
      image: imagePath,
      rating: 0,
      reviews: 0,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update product
export const updateHomeProduct = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updated = await HomeProduct.findByIdAndUpdate(req.params.id, updateData, { new: true });
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
