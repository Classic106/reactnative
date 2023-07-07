import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "@/types";
import { ActionType } from "./types";

import * as products from "@/api/products";

const getProducts = createAsyncThunk(
  ActionType.GET_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const result = await products.getProducts();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const createProduct = createAsyncThunk(
  ActionType.CREATE_PRODUCT,
  async (data: IProduct, { rejectWithValue }) => {
    try {
      const result = await products.createProduct(data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const updateProduct = createAsyncThunk(
  ActionType.UPDATE_PRODUCT,
  async (data: IProduct, { rejectWithValue }) => {
    try {
      const result = await products.updateProduct(data);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const deleteProduct = createAsyncThunk(
  ActionType.DELETE_PRODUCT,
  async (data: Number, { rejectWithValue }) => {
    try {
      await products.deleteProduct(data);
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export { getProducts, createProduct, updateProduct, deleteProduct };
