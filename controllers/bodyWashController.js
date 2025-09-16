import BodyWash from "../models/BodyWash.js";


export const getBodyWashes = async (req, res) => {
  try {
    const products = await BodyWash.find();
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
    const product = new BodyWash(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Update product
export const updateBodyWash = async (req, res) => {
  try {
    const updatedProduct = await BodyWash.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated doc
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 👉 Delete product
export const deleteBodyWash = async (req, res) => {
  try {
    const deletedProduct = await BodyWash.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
