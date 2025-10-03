import authRouter from "./auth.routes.js";
import employeeRouter from "./employee.routes.js";

function allRoutes(app) {
  app.use("/api/auth", authRouter);
  app.use("/api/employees", employeeRouter);
}

export default allRoutes;
