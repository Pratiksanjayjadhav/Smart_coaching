import mongoose from "mongoose";

const workoutLogSchema = new mongoose.Schema({
  athlete: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  trainingPlan: { type: mongoose.Schema.Types.ObjectId, ref: "TrainingPlan" },
  performance: String,
  fatigueLevel: Number,
  date: { type: Date, default: Date.now }
});

export default mongoose.model("WorkoutLog", workoutLogSchema);

