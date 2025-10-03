import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase",
  jwtSecret: process.env.JWT_SECRET || "abcd1234",
  saltRounds: Number(process.env.SALT_ROUNDS) || 10,
  jwtExpire: process.env.JWT_EXPIRES_IN || "1d",
};
