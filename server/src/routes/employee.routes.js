import express from "express";
import {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employee.controller.js";

const employeeRouter = express.Router();

// Create a new employee
employeeRouter.post("/create", createEmployee);
// Get all employees
employeeRouter.get("/getAll", getEmployees);
// Get employee by ID
employeeRouter.get("/get/:id", getEmployeeById);
// Update employee by ID
employeeRouter.put("/update/:id", updateEmployee);
// Delete employee by ID
employeeRouter.delete("/delete/:id", deleteEmployee);

export default employeeRouter;
