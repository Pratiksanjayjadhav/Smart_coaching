import express from "express";
import { createTrainingPlan } from "../controllers/coachController.js";
import { getAllAthletes } from "../controllers/coachController.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/plan", protect, allowRoles("coach"), createTrainingPlan);
router.get("/athletes", protect, allowRoles("coach"), getAllAthletes);
export default router;
