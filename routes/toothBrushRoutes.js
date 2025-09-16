import express from "express";
import {
  getToothBrushes,
  getToothBrushById,
  addToothBrush,
  updateToothBrush,
  deleteToothBrush,
} from "../controllers/toothBrushController.js";

const router = express.Router();

// CRUD Routes
router.get("/", getToothBrushes);       // GET all
router.get("/:id", getToothBrushById); // GET one
router.post("/", addToothBrush);       // POST create
router.put("/:id", updateToothBrush);  // PUT update
router.delete("/:id", deleteToothBrush); // DELETE

export default router;
