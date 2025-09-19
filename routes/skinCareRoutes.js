 import express from "express";
import multer from "multer";
import {
  getSkinCare,
  addSkinCare,
  updateSkinCare,
  deleteSkinCare
} from "../controllers/skinCareController.js";

const router = express.Router();

// ✅ Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get("/", getSkinCare);
router.post("/", upload.single("image"), addSkinCare); // POST with image
router.put("/:id", upload.single("image"), updateSkinCare); // PUT with image
router.delete("/:id", deleteSkinCare);

export default router;
