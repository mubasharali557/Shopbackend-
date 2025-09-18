import Juice from "../models/juiceModel.js";
// ✅ Get all juices
export const getJuices = async (req, res) => {
  try {
    const juices = await Juice.find();
    res.json(juices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Get single juice
export const getJuice = async (req, res) => {
  try {
    const juice = await Juice.findById(req.params.id);
    if (!juice) return res.status(404).json({ message: "Juice not found" });
    res.json(juice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Create juice with image upload
export const addJuice = async (req, res) => {
  try {
    const { title, price, category } = req.body;

    const juice = new Juice({
      title,
      price,
      category: category || "Juices",
      rating: 0,
      reviews: 0,
      image: req.file ? `/uploads/${req.file.filename}` : "/default.jpg",
    });

    const newJuice = await juice.save();
    res.status(201).json(newJuice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Update juice
export const updateJuice = async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedJuice = await Juice.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedJuice) return res.status(404).json({ message: "Juice not found" });
    res.json(updatedJuice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ Delete juice
export const deleteJuice = async (req, res) => {
  try {
    const deletedJuice = await Juice.findByIdAndDelete(req.params.id);
    if (!deletedJuice) return res.status(404).json({ message: "Juice not found" });
    res.json({ message: "Juice deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
