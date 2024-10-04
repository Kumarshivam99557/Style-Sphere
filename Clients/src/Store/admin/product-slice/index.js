import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  products: [],
};

// add new products
export const addNewProducts = createAsyncThunk(
  "/products/addnewproducts",
  async (formData) => {
    try {
      const result = await axios.post(
        "http://localhost:3000/api/admin/product/add",
        formData,
        {
          "Content-Type": "application/json",
        }
      );
      return result?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// fetch all products
export const fetchAllProducts = createAsyncThunk(
  "/products/fetchProduct",
  async (formData) => {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/admin/product/get"
      );
      return result?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// edit product
export const editProducts = createAsyncThunk(
  "/products/editProduct",
  async ({ formData, id }) => {
    try {
      const result = await axios.put(
        `http://localhost:3000/api/admin/product/edit/${id}`,
        formData,
        {
          "Content-Type": "application/json",
        }
      );
      return result?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

// dlete a product

export const deleteProducts = createAsyncThunk(
  "/products/deleteProduct",
  async (id) => {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/admin/product/delete/${id}`
      );
      return result?.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.products = [];
      });
  },
});

export default AdminProductsSlice.reducer;
