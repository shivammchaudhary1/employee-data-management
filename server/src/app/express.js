import express from "express";
import cors from "cors";
import { config } from "../config/environments/default.js";
import connectDB from "../config/db/db.js";
import allRoutes from "../routes/app.routes.js";

const configureExpress = () => {
  //initialize express app
  const app = express();

  //middlewares
  app.use(express.json());
  app.use(cors());
  //routes
  allRoutes(app);

  app.get("/", (req, res) => {
    res.status(200).send({
      message: "Welcome to the Employee Data Management API",
      success: true,
      timestamp: new Date().toISOString(),
    });
  });

  app.listen(process.env.PORT || config.port, async () => {
    //database connection
    await connectDB();
    console.log(`Server is running on port ${process.env.PORT || config.port}`);
  });
};

export default configureExpress;
