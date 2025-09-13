import User from "../models/User.js";
import bcrypt from "bcryptjs";

// ✅ Create User (Register)
export const registerUser = async (req, res) => {
  try {
    console.log("Incoming Body ", req.body); 

    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // save user
    const user = new User({ name, email, password: hashedPassword, phone });
    await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// ✅ Get All Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // password hide
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Get Single User
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Update User
export const updateUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // agar password update ho raha hai to hash karo
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    await user.save();
    res.json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// ✅ Delete User
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
