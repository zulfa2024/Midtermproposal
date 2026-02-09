// Task model: defines the fields for each task and uses timestamps.
// The export line prevents duplicate model creation during Next.js reloads.
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    status: { type: String, default: "pending" },
  },
  { timestamps: true },
);

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
