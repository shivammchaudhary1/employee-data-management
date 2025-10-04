import jwt from "jsonwebtoken";
import { config } from "../environments/default.js";

const createJWT = (payload, options = {}) => {
  try {
    const token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: options.expiresIn || config.jwtExpire,
    });
    return token;
  } catch (error) {
    console.error("Error creating JWT:", error);
    throw new Error("Token creation failed");
  }
};

const verifyJWT = (token) => {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return decoded;
  } catch (error) {
    console.error("Error verifying JWT:", error);
    if (error.name === "TokenExpiredError") {
      throw new Error("Token has expired");
    }
    throw new Error("Invalid token");
  }
};

const extractTokenFromHeader = (authHeader) => {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.split(" ")[1];
};

export { createJWT, verifyJWT, extractTokenFromHeader };
