import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authslice";
import { employeeSlice } from "./slices/employeeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    employee: employeeSlice.reducer,
  },
});
