import BodyWash from "../models/BodyWash.js";
// 👉 Get all products
export const getBodyWashes = async (req, res) => {
  try {
    const products = await BodyWash.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 Get single product by ID
export const getBodyWashById = async (req, res) => {
  try {
    const product = await BodyWash.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 👉 Create new product
export const addBodyWash = async (req, res) => {
  try {
    const { title, category, price, rating, reviews } = req.body;

    if (!title || !price) {
      return res.status(400).json({ message: "Title and price are required." });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Image is required." });
    }

    const product = new BodyWash({
      title,
      image: `/uploads/${req.file.filename}`,
      category: category || "Body Washes",
      price,
      rating: rating || 0,
      reviews: reviews || 0,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Update product
export const updateBodyWash = async (req, res) => {
  try {
    const { title, category, price, rating, reviews } = req.body;

    const updatedFields = {
      ...(title && { title }),
      ...(category && { category }),
      ...(price && { price }),
      ...(rating !== undefined && { rating }),
      ...(reviews !== undefined && { reviews }),
    };

    if (req.file) {
      updatedFields.image = `/uploads/${req.file.filename}`;
    }

    const updatedProduct = await BodyWash.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true, runValidators: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Delete product
export const deleteBodyWash = async (req, res) => {
  try {
    const deletedProduct = await BodyWash.findByIdAndDelete(req.params.id);
    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
