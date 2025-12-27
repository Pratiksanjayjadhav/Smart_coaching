import TrainingPlan from "../models/TrainingPlan.js";

export const createTrainingPlan = async (req, res) => {
  const plan = await TrainingPlan.create({
    ...req.body,
    coach: req.user.id
  });
  res.status(201).json(plan);
};
