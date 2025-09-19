import express from "express";
import multer from "multer";
import path from "path";
import {
  getMilkProducts,
  getMilkProductById,
  addMilkProduct,
  updateMilkProduct,
  deleteMilkProduct,
} from "../controllers/milkProductController.js";

const router = express.Router();

// 👉 Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save in uploads folder
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname) // unique name
    );
  },
});

const upload = multer({ storage });

// ✅ Get All
router.get("/", getMilkProducts);

// ✅ Get By ID
router.get("/:id", getMilkProductById);

// ✅ Add Product with Image
router.post("/", upload.single("image"), addMilkProduct);

// ✅ Update Product (optional: allow image upload)
router.put("/:id", upload.single("image"), updateMilkProduct);

// ✅ Delete Product
router.delete("/:id", deleteMilkProduct);

export default router;
