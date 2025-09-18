import express from "express";
import multer from "multer";
import path from "path";
import {
  getJuices,
  getJuice,
  addJuice,
  updateJuice,
  deleteJuice,
} from "../controllers/juiceController.js";

const router = express.Router();

// 📂 Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// Routes
router.get("/", getJuices);
router.get("/:id", getJuice);
router.post("/", upload.single("image"), addJuice);
router.put("/:id", upload.single("image"), updateJuice);
router.delete("/:id", deleteJuice);

export default router;
