import express from "express";
import multer from "multer";
import {
  getHouseProducts,
  addHouseProduct,
  deleteHouseProduct,
} from "../controllers/houseProductController.js";

const router = express.Router();

// ✅ Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// ✅ Routes
router.get("/", getHouseProducts);
router.post("/", upload.single("image"), addHouseProduct);
router.delete("/:id", deleteHouseProduct);

export default router;
