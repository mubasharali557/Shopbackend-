import express from "express";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  updatePriceImage,
  upload, // import multer upload
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

// ✅ Multer middleware for multiple file uploads
router.post("/", upload.array("images", 5), addProduct);

router.put("/:id", updateProduct);
router.patch("/:id", updatePriceImage);
router.delete("/:id", deleteProduct);

export default router;
