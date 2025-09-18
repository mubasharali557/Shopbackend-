import express from "express";
import {
  getCookingOils,
  addCookingOil,
  updateCookingOil,
  deleteCookingOil,
} from "../controllers/cookingOilController.js";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Ensure upload folder exists
const uploadDir = path.join(process.cwd(), "public", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("✅ Created upload directory:", uploadDir);
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/", getCookingOils);
router.post("/", upload.single("image"), addCookingOil);
router.put("/:id", upload.single("image"), updateCookingOil);
router.delete("/:id", deleteCookingOil);

export default router;
