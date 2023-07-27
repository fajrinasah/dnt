import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import api from "../../../utils/api.instance";
import {
  toastBlank,
  toastError,
  toastSuccess,
} from "../../../../../src/components/02-molecules/forAuthAndManage/customToasts";

/* ==================================================================== */
// ADD CASHIER
/* ==================================================================== */
export const addCashier = createAsyncThunk(
  "cashiers/addCashier",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {email, username}
      const { data } = await api.post("/cashier/", payload);

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
// EDIT CASHIER'S EMAIL
/* ==================================================================== */
export const editEmailCashier = createAsyncThunk(
  "cashiers/editEmailCashier",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {email, username}
      const { data } = await api.patch("/cashier/edit/email", payload);

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
// INACTIVATE CASHIER
/* ==================================================================== */
export const inactivateCashier = createAsyncThunk(
  "cashiers/inactivateCashier",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: username --> req.params
      const { data } = await api.delete(`/cashier/${payload}`);

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
// GET CASHIER'S DATA
/* ==================================================================== */
export const getCashier = createAsyncThunk(
  "cashiers/getCashier",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: username --> req.params
      const { data } = await api.get(`/cashier/${payload}`);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
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

/* ==================================================================== */
// GET ALL CASHIERS
/* ==================================================================== */
export const getAllCashiers = createAsyncThunk(
  "cashiers/getAllCashiers",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: req queries (if any)
      // available queries: page, status, username, timesort, namesort (see postman for more details)
      const { data } = await api.get(`/cashiers/${payload}`);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
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
