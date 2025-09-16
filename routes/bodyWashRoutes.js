import express from "express";
import {
  getBodyWashes,
  getBodyWashById,
  addBodyWash,
  updateBodyWash,
  deleteBodyWash,
} from "../controllers/bodyWashController.js";

const router = express.Router();

router.get("/", getBodyWashes);        // Get all
router.get("/:id", getBodyWashById);   // Get one
router.post("/", addBodyWash);         // Create
router.put("/:id", updateBodyWash);    // Update
router.delete("/:id", deleteBodyWash); // Delete

export default router;
