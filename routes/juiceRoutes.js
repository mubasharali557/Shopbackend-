import express from "express";
import {
  getJuices,
  getJuice,
  addJuice,
  updateJuice,
  deleteJuice
} from "../controllers/juiceController.js";

const router = express.Router();

router.get("/", getJuices);       // GET all
router.get("/:id", getJuice);     // GET one
router.post("/", addJuice);       // POST
router.put("/:id", updateJuice);  // PUT
router.delete("/:id", deleteJuice); // DELETE

export default router;
