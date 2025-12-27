import mongoose from "mongoose";

const trainingPlanSchema = new mongoose.Schema({
  title: String,
  type: String, // strength, endurance, skills
  coach: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  athletes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  schedule: String
});

export default mongoose.model("TrainingPlan", trainingPlanSchema);
