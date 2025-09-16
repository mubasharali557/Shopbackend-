import express from "express";
import {
  getMilkProducts,
  getMilkProductById,
  addMilkProduct,
  updateMilkProduct,
  deleteMilkProduct,
} from "../controllers/milkProductController.js";

const router = express.Router();

// GET all
router.get("/", getMilkProducts);

// GET single by ID
router.get("/:id", getMilkProductById);

// POST new
router.post("/", addMilkProduct);

// PUT update by ID
router.put("/:id", updateMilkProduct);

// DELETE by ID
router.delete("/:id", deleteMilkProduct);

export default router;
