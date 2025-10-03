import mongoose from "mongoose";
import { config } from "../../config/environments/default.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log({ message: "MongoDB connected successfully" });
  } catch (error) {
    console.error({ message: "MongoDB connection failed:", error });
    process.exit(1);
  }
};

export default connectDB;
