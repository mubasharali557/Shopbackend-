import express from "express";
import multer from "multer";
import path from "path";
import {
  getHomeProducts,
  addHomeProduct,
  updateHomeProduct,
  deleteHomeProduct,
} from "../controllers/homeProductController.js";

const router = express.Router();

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ✅ Routes
router.get("/", getHomeProducts);
router.post("/", upload.single("image"), addHomeProduct);
router.put("/:id", upload.single("image"), updateHomeProduct);
router.delete("/:id", deleteHomeProduct);

export default router;
