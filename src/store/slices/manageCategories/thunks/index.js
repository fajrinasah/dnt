import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import api from "../../../utils/api.instance";
import {
  toastBlank,
  toastError,
  toastSuccess,
} from "../../../../../src/components/02-molecules/forAuthAndManage/customToasts";

/* ==================================================================== */
// ADD CATEGORY
/* ==================================================================== */
export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {name}
      const { data } = await api.post("/category/", payload);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
        success: toastSuccess(data?.message),
      });

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
// EDIT CATEGORY'S NAME
/* ==================================================================== */
export const editCategory = createAsyncThunk(
  "categories/editCategory",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {categoryId, body: {name}}
      const { data } = await api.patch(
        `/category/${payload?.categoryId}`,
        payload?.body
      );

      toast.promise(data, {
        loading: toastBlank("Loading..."),
        success: toastSuccess(data?.message),
      });

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
// DELETE CATEGORY (HARD DELETE)
/* ==================================================================== */
export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: categoryId --> req.params
      const { data } = await api.delete(`/category/${payload}`);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
        success: toastSuccess(data?.message),
      });

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
// GET ALL CATEGORIES
/* ==================================================================== */
export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: req queries (if any)
      // available queries: name, timesort, namesort (see postman for more details)
      const { data } = await api.get(`/categories/`, payload);      

      // toastSuccess(data?.message);

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
// GET CATEGORIES OF A PRODUCT
/* ==================================================================== */
export const getProductCategories = createAsyncThunk(
  "categories/getProductCategories",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: productId --> req.params
      const { data } = await api.get(`/categories/product/${payload}`);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
        success: toastSuccess(data?.message),
      });

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
