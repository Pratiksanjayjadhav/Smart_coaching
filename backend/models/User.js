import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "coach", "athlete"],
    default: "athlete"
  }
});

export default mongoose.model("User", userSchema);
