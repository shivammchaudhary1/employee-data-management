import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/config.js";

const initialState = {
  employees: [],
};

export const getAllEmployees = createAsyncThunk(
  "employee/getAllEmployees",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `${config.BACKEND_URL}/api/employees/getAll`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.fulfilled, (state, action) => {
      console.log("Fetched Employees:", action.payload);
      state.employees = action.payload.employees;
    });
  },
});

export const selectAllEmployeesData = (state) => state.employee.employees;

export default employeeSlice.reducer;
