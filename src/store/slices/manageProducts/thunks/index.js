import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../../src/components/02-molecules/forAuthAndManage/customToasts";

/* ==================================================================== */
// ADD PRODUCT
/* ==================================================================== */
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: formData that consist of data (stringified) and file (product image)
      // see postman for more details
      const { data } = await api.post("/product/", payload);

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// GET PRODUCT'S DATA
/* ==================================================================== */
export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: productId --> req.params
      const { data } = await api.get(`/product/${payload}`);

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// EDIT PRODUCT'S IMAGE
/* ==================================================================== */
export const editProductImage = createAsyncThunk(
  "products/editProductImage",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {productId, body: {formData}}
      // see postman for more details
      const { data } = await api.patch(
        `/product/edit/image/${payload?.productId}`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// EDIT PRODUCT'S INFO
/* ==================================================================== */
export const editProductInfo = createAsyncThunk(
  "products/editProductInfo",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {productId, body: {name, description, price, categoryIdArr}} --> can be single or multiple patch data
      // see postman for more details
      const { data } = await api.patch(
        `/product/edit/info/${payload?.productId}`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// EDIT PRODUCT'S STATUS
/* ==================================================================== */
export const editProductStatus = createAsyncThunk(
  "products/editProductStatus",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {productId, body: {product_status_id}
      // see postman for more details
      const { data } = await api.patch(
        `/product/edit/status/${payload?.productId}`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// DELETE PRODUCT'S CATEGORY/CATEGORIES
/* ==================================================================== */
export const deleteProductCategories = createAsyncThunk(
  "products/deleteProductCategories",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {productId, body: {categoryIdArr}}
      // see postman for more details
      const { data } = await api.delete(
        `/product/${payload?.productId}/categories`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// GET ALL PRODUCTS
/* ==================================================================== */
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: req queries (if any)
      const { data } = await api.get(`/products/${payload}`);

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);
