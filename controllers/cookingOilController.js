import CookingOil from "../models/CookingOil.js";

// 📌 Get all Cooking Oil Products
export const getCookingOils = async (req, res) => {
  try {
    const oils = await CookingOil.find();
    res.json(oils);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📌 Add new Cooking Oil Product
export const addCookingOil = async (req, res) => {
  try {
    const oil = new CookingOil(req.body);
    const savedOil = await oil.save();
    res.status(201).json(savedOil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📌 Update Cooking Oil Product
export const updateCookingOil = async (req, res) => {
  try {
    const updated = await CookingOil.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📌 Delete Cooking Oil Product
export const deleteCookingOil = async (req, res) => {
  try {
    await CookingOil.findByIdAndDelete(req.params.id);
    res.json({ message: "Cooking oil deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
