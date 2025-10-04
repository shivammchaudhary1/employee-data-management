import Employee from "../models/employee.model.js";

// Create a new employee
const createEmployee = async (req, res) => {
  const { name, email, position } = req.body;
  const userId = req.user.userId;

  try {
    if (!name || !email || !position) {
      return res.status(400).json({
        message: "Please provide name, email, position, and userId",
        success: false,
      });
    }

    // Check if email already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ message: "Email already exists", success: false });
    }

    const employee = new Employee({ name, email, position, user: userId });
    const savedEmployee = await employee.save();
    res.status(201).json({
      message: "Employee created successfully",
      employee: savedEmployee,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error creating employee",
      error: error.message,
      success: false,
    });
  }
};

// Get all employees
const getEmployees = async (req, res) => {
  const userId = req.user.userId;

  console.log("Fetching employees for user:", userId);
  try {
    const employees = await Employee.find({ user: userId });
    res.status(200).json({
      message: "Employees fetched successfully",
      employees,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching employees",
      error: error.message,
      success: false,
    });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res
        .status(404)
        .json({ message: "Employee not found", success: false });
    }
    res.status(200).json({
      message: "Employee fetched successfully",
      employee,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching employee",
      success: false,
      error: error.message,
    });
  }
};

// Update employee by ID
const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res
        .status(404)
        .json({ message: "Employee not found", success: false });
    }
    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error updating employee",
      error: error.message,
      success: false,
    });
  }
};

// Delete employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
    if (!deletedEmployee) {
      return res
        .status(404)
        .json({ message: "Employee not found", success: false });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      employee: deletedEmployee,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error: error.message,
      success: false,
    });
  }
};

export {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
