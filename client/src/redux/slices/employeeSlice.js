import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/config.js";

const initialState = {
  employees: [],
};

export const getAllEmployees = createAsyncThunk(
  "employee/getAllEmployees",
  async ({ token }, thunkAPI) => {
    try {
      const response = await fetch(
        `${config.BACKEND_URL}/api/employees/getAll`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async ({ formData, token }, thunkAPI) => {
    try {
      const response = await fetch(
        `${config.BACKEND_URL}/api/employees/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateEmployee = createAsyncThunk(
  "employee/updateEmployee",
  async (employeeData, thunkAPI) => {
    try {
      const response = await fetch(
        `${config.BACKEND_URL}/api/employees/update/${employeeData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${employeeData.token}`,
          },

          body: JSON.stringify(employeeData),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async ({ employeeId, token }, thunkAPI) => {
    try {
      await fetch(`${config.BACKEND_URL}/api/employees/delete/${employeeId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // const data = await response.json();
      return employeeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      //   console.log("Fetched Employees:", action.payload);
      state.employees = action.payload.employees;
    });
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.employees.push(action.payload.employee);
    });
    builder.addCase(updateEmployee.fulfilled, (state, action) => {
      const index = state.employees.findIndex(
        (emp) => emp._id === action.payload.employee._id
      );
      if (index !== -1) {
        state.employees[index] = action.payload.employee;
      }
    });
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      console.log("Deleted Employee ID:", action.payload);
      state.employees = state.employees.filter(
        (emp) => emp._id !== action.payload
      );
    });
  },
});

export const selectAllEmployeesData = (state) => state.employee.employees;

export default employeeSlice.reducer;
