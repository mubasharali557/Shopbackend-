import express from "express";
import {
  getSkinCare,
  addSkinCare,
  updateSkinCare,
  deleteSkinCare
} from "../controllers/skinCareController.js";

const router = express.Router();

// GET all
router.get("/", getSkinCare);

// POST new
router.post("/", addSkinCare);

// PUT update
router.put("/:id", updateSkinCare);

// DELETE
router.delete("/:id", deleteSkinCare);

export default router;
