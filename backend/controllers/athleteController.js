import TrainingPlan from "../models/TrainingPlan.js";
import WorkoutLog from "../models/WorkoutLog.js";

// Controller to log workout
export const logWorkout = async (req, res) => {
  try {
    const { workout, duration, fatigueLevel } = req.body;

    const log = await WorkoutLog.create({
      athlete: req.user._id,
      workout,
      duration,
      fatigueLevel,
    });

    res.status(201).json(log);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging workout" });
  }
};

// Controller to get assigned plans
export const getAssignedPlans = async (req, res) => {
  try {
    const plans = await TrainingPlan.find({ athletes: req.user.id });
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assigned plans" });
  }
};

// Helper (not a route)
export const assignPlanToAthlete = async (planId, athleteId) => {
  const plan = await TrainingPlan.findById(planId);
  if (!plan) throw new Error("Plan not found");
  if (!plan.athletes.includes(athleteId)) {
    plan.athletes.push(athleteId);
    await plan.save();
  }
  return plan;
};

// GET athlete workout logs
export const getWorkoutLogs = async (req, res) => {
  try {
    console.log("Athlete ID:", req.user._id);

    const logs = await WorkoutLog.find({ athlete: req.user._id });

    console.log("Fetched Logs:", logs);

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch logs" });
  }
};

