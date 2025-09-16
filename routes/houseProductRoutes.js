import express from "express";
import {
  getHouseProducts,
  getHouseProductById,
  addHouseProduct,
  updateHouseProduct,
  deleteHouseProduct,
} from "../controllers/houseProductController.js";

const router = express.Router();

// Routes
router.get("/", getHouseProducts);   
router.get("/:id", getHouseProductById);   
router.post("/", addHouseProduct);        
router.put("/:id", updateHouseProduct);   
router.delete("/:id", deleteHouseProduct); 

export default router;
