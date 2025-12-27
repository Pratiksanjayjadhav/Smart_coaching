import express from "express";
import {
  logWorkout,
  getAssignedPlans
} from "../controllers/athleteController.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/log", protect, allowRoles("athlete"), logWorkout);
router.get("/plans", protect, allowRoles("athlete"), getAssignedPlans);

export default router;
