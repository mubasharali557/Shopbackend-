import express from "express";
import {
  getHomeProducts,
  addHomeProduct,
  updateHomeProduct,
  deleteHomeProduct,
} from "../controllers/homeProductController.js";

const router = express.Router();

router.get("/", getHomeProducts);
router.post("/", addHomeProduct);
router.put("/:id", updateHomeProduct);
router.delete("/:id", deleteHomeProduct);

export default router;
