import mongoose from "mongoose";

const workoutLogSchema = new mongoose.Schema(
  {
    athlete: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    workout: String,
    duration: Number,
    fatigueLevel: Number,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("WorkoutLog", workoutLogSchema);
