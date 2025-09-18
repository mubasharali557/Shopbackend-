import express from "express";
import multer from "multer";
import {
  getBodyWashes,
  getBodyWashById,
  addBodyWash,
  updateBodyWash,
  deleteBodyWash,
} from "../controllers/bodyWashController.js";

const router = express.Router();

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save inside /uploads
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.get("/", getBodyWashes);
router.get("/:id", getBodyWashById);
router.post("/", upload.single("image"), addBodyWash);
router.put("/:id", upload.single("image"), updateBodyWash);
router.delete("/:id", deleteBodyWash);

export default router;
