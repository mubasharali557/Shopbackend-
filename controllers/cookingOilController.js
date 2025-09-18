import CookingOil from "../models/CookingOil.js";

export const getCookingOils = async (req, res) => {
  try {
    const oils = await CookingOil.find();
    res.json(oils);
  } catch (err) {
    console.error("getCookingOils error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const addCookingOil = async (req, res) => {
  try {
    console.log("POST /api/cooking-oil body:", req.body);
    console.log("POST /api/cooking-oil file:", req.file && req.file.filename);

    const title = req.body.title?.trim();
    const priceRaw = req.body.price;
    if (!title || !priceRaw) {
      return res.status(400).json({ message: "Title and price are required" });
    }

    const price = Number(priceRaw);
    if (Number.isNaN(price)) {
      return res.status(400).json({ message: "Price must be a number" });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : "/uploads/default.jpg";

    const oil = new CookingOil({
      title,
      price,
      category: req.body.category || "Cooking Oil",
      image: imagePath,
      rating: 0,
      reviews: 0,
      status: req.body.status || "Pending",
      customer: req.body.customer || "Guest",
    });

    const savedOil = await oil.save();
    res.status(201).json(savedOil);
  } catch (err) {
    console.error("addCookingOil error:", err);
    res.status(500).json({ message: err.message });
  }
};

export const updateCookingOil = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) updateData.image = `/uploads/${req.file.filename}`;

    const updated = await CookingOil.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!updated) return res.status(404).json({ message: "Product not found" });
    res.json(updated);
  } catch (err) {
    console.error("updateCookingOil error:", err);
    res.status(400).json({ message: err.message });
  }
};

export const deleteCookingOil = async (req, res) => {
  try {
    const deleted = await CookingOil.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Cooking oil deleted successfully" });
  } catch (err) {
    console.error("deleteCookingOil error:", err);
    res.status(500).json({ message: err.message });
  }
};
