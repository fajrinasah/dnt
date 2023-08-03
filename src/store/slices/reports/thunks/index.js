import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import {
  toastError,
  toastSuccess,
} from "../../../../../src/components/02-molecules/forAuthAndManage/customToasts";

/* ==================================================================== */
// CREATE SALES REPORTS
/* ==================================================================== */
export const createSalesReports = createAsyncThunk(
  "reports/createSalesReports",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`/reports/sales-report`, payload);

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
// GET SALES AGGREGATES
/* ==================================================================== */
export const getSalesAggregates = createAsyncThunk(
  "reports/getSalesAggregates",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/reports/sales-report/${payload}`);

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
// GET PRODUCT SOLD
/* ==================================================================== */
export const getProductsSold = createAsyncThunk(
    "reports/getProductsSold",
    async (payload, { rejectWithValue }) => {
      try {
        const { data } = await api.get(`/reports/product-sold`);
  
        return data;
      } catch (error) {
        toastError(error.response ? error.response.data?.message : error);
        return rejectWithValue(
          error.response ? error.response.data?.message : error
        );
      }
    }
  );
