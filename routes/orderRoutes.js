
import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// POST - Create order
router.post("/orders", createOrder);

// GET - Get all orders
router.get("/orders", getOrders);

// GET - Get single order by ID
router.get("/orders/:id", getOrderById);

// PUT - Update order
router.put("/orders/:id", updateOrder);

// DELETE - Delete order
router.delete("/orders/:id", deleteOrder);

export default router;
