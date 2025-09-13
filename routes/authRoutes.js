// import express from "express";
// import { registerUser } from "../controllers/userController.js";

// const router = express.Router();

// router.post("/register", registerUser);

// export default router;


import express from "express";
import {
  registerUser,
  getUsers,
//   getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Routes
router.post("/register", registerUser); // Create
router.get("/Users", getUsers);   
//  router.get("/:id", getUserById); 
router.put("/update", updateUser);         // Update
router.delete("/:id", deleteUser);      // Delete

export default router;
