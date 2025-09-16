import express from "express";
import { getCookingOils, addCookingOil, updateCookingOil, deleteCookingOil } from "../controllers/cookingOilController.js";

const router = express.Router();

router.get("/", getCookingOils);
router.post("/", addCookingOil);
router.put("/:id", updateCookingOil);
router.delete("/:id", deleteCookingOil);

export default router;
