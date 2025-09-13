// routes/deliveryRoutes.js
import express from "express";
import {
  saveDelivery,
  getDeliveries,
  getDeliveryById,
  updateDelivery,
  deleteDelivery,
} from "../controllers/deliveryController.js";

const router = express.Router();

// POST -> Save new delivery
router.post("/save", saveDelivery);

// GET -> Get all deliveries
router.get("/", getDeliveries);

// GET -> Get delivery by ID
router.get("/:id", getDeliveryById);

// PUT -> Update delivery by ID
router.put("/:id", updateDelivery);

// DELETE -> Delete delivery by ID
router.delete("/:id", deleteDelivery);

export default router;
