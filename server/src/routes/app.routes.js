import authRouter from "./auth.routes.js";
import employeeRouter from "./employee.routes.js";
import { protect } from "../middleware/auth.middleware.js";

function allRoutes(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/employees", protect, employeeRouter);
}

export default allRoutes;
