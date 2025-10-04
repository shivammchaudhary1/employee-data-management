import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../../config/config.js";

const initalState = {
  isAuthenticated: !!localStorage.getItem("edmtoken"),
  user: JSON.parse(localStorage.getItem("edmuser")) || null,
  token: localStorage.getItem("edmtoken") || null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(`${config.BACKEND_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkAPI) => {
    try {
      const response = await fetch(`${config.BACKEND_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initalState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Store in localStorage
      localStorage.setItem("edmtoken", action.payload.token);
      localStorage.setItem("edmuser", JSON.stringify(action.payload.user));
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      // Remove from localStorage
      localStorage.removeItem("edmtoken");
      localStorage.removeItem("edmuser");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Store in localStorage
      localStorage.setItem("edmtoken", action.payload.token);
      localStorage.setItem("edmuser", JSON.stringify(action.payload.user));
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      // Store in localStorage
      localStorage.setItem("edmtoken", action.payload.token);
      localStorage.setItem("edmuser", JSON.stringify(action.payload.user));
    });
  },
});

export const { setLogin, setLogout } = authSlice.actions;
// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
