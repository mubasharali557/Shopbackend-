import express from "express";
import multer from "multer";
import {
  getToothBrushes,
  getToothBrushById,
  addToothBrush,
  updateToothBrush,
  deleteToothBrush,
} from "../controllers/toothBrushController.js";

const router = express.Router();

// ✅ Multer Storage Config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // save to /uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // unique filename
  },
});

const upload = multer({ storage });

// ✅ CRUD Routes
router.get("/", getToothBrushes);             // GET all
router.get("/:id", getToothBrushById);        // GET one
router.post("/", upload.single("image"), addToothBrush); // ✅ POST with image upload
router.put("/:id", upload.single("image"), updateToothBrush); // ✅ PUT with image upload
router.delete("/:id", deleteToothBrush);      // DELETE

export default router;
