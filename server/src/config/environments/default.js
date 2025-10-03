import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  jwtSecret: process.env.JWT_SECRET || "your-secret-key",
};
