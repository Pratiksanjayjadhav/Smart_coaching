import TrainingPlan from "../models/TrainingPlan.js";
import User from "../models/User.js";

export const createTrainingPlan = async (req, res) => {
  const plan = await TrainingPlan.create({
    ...req.body,
    coach: req.user.id
  });
  res.status(201).json(plan);
};


// Get all athletes
export const getAllAthletes = async (req, res) => {
  try {
    const athletes = await User.find({ role: "athlete" }).select("_id name email");
    res.status(200).json(athletes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch athletes" });
  }
};