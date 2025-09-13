// import express from "express";
// import { 
//   getProducts, 
//   addProduct, 
//   updateProduct, 
//   deleteProduct, 
//   getProductById 
// } from "../controllers/productController.js";

// const router = express.Router();

// // GET all products
// router.get("/", getProducts);

// // GET single product by ID
// router.get("/:id", getProductById);

// // POST new product
// router.post("/", addProduct);

// // PUT update product by ID
// router.put("/:id", updateProduct);

// // DELETE product by ID
// router.delete("/:id", deleteProduct);

// export default router;


import express from "express";
import { 
  getProducts, 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  getProductById,
  updatePriceImage
} from "../controllers/productController.js";

const router = express.Router();

// GET all products
router.get("/", getProducts);

// GET single product by ID
router.get("/:id", getProductById);

// POST new product
router.post("/", addProduct);

// PUT full update
router.put("/:id", updateProduct);

// PATCH update only price & images
router.patch("/:id", updatePriceImage);

// DELETE product
router.delete("/:id", deleteProduct);

export default router;
