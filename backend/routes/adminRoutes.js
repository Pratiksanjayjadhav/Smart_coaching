import express from "express";
import { getAllUsers } from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/users", protect, allowRoles("admin"), getAllUsers);

export default router;
