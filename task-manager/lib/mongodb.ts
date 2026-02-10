import mongoose from "mongoose";
// Flag to track the connection status
let isConnected = false;
// Function to connect to MongoDB

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    isConnected = true;
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
