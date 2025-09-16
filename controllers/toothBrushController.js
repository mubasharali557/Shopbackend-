// import ToothBrush from "../models/ToothBrush.js";

// // Get all ToothBrush products
// export const getToothBrushes = async (req, res) => {
//   try {
//     const products = await ToothBrush.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Add new ToothBrush
// export const addToothBrush = async (req, res) => {
//   try {
//     const product = new ToothBrush(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };
 
import ToothBrush from "../models/ToothBrush.js";

// ✅ Get all
export const getToothBrushes = async (req, res) => {
  try {
    const products = await ToothBrush.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single by ID
export const getToothBrushById = async (req, res) => {
  try {
    const product = await ToothBrush.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "ToothBrush not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Add new
export const addToothBrush = async (req, res) => {
  try {
    const product = new ToothBrush(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update
export const updateToothBrush = async (req, res) => {
  try {
    const product = await ToothBrush.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated document
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "ToothBrush not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete
export const deleteToothBrush = async (req, res) => {
  try {
    const product = await ToothBrush.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "ToothBrush not found" });
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
