import TrainingPlan from "../models/TrainingPlan.js";

export const logWorkout = async (req, res) => {
  try {
    const { workout, duration } = req.body;

    res.status(201).json({
      message: "Workout logged successfully",
      data: { workout, duration }
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging workout" });
  }
};

export const getAssignedPlans = async (req, res) => {
  try {
    const plans = await TrainingPlan.find({
      athletes: req.user.id
    });

    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch assigned plans" });
  }
};
