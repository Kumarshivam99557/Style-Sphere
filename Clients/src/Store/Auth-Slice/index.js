import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "/auth/registration",
  async (formData,{ rejectWithValue }) => {
    try{
    const respons = await axios.post(
      "http://localhost:3000/api/auth/register",
      formData,
      { withCredentials: true }
    );

    console.log("response data",respons.data)
    return respons.data;
  }catch(err){
    console.error("Error during registration:", error);
    return rejectWithValue(error.response.data);
  }
}
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuthenticated = false;
        console.log(action.payload)
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
        console.error("Registration failed:", action.error.message);
      });
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
