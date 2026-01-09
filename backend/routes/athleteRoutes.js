
import express from "express";
import { logWorkout, getAssignedPlans } from "../controllers/athleteController.js";
import { protect } from "../middleware/authMiddleware.js";
import { allowRoles } from "../middleware/roleMiddleware.js";
import { getWorkoutLogs } from "../controllers/athleteController.js";


const router = express.Router();

router.post("/log", protect, allowRoles("athlete"), logWorkout);
router.get("/plans", protect, allowRoles("athlete"), getAssignedPlans);
router.get("/logs", protect, allowRoles("athlete"), getWorkoutLogs);

export default router;

// import express from "express";
// import {
//   logWorkout,
//   getAssignedPlans
// } from "../controllers/athleteController.js";
// import { protect } from "../middleware/authMiddleware.js";
// import { allowRoles } from "../middleware/roleMiddleware.js";

// const router = express.Router();

// router.post("/log", protect, allowRoles("athlete"), logWorkout);
// router.get("/plans", protect, allowRoles("athlete"), getAssignedPlans);

// export default router;
