import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";


/* ==================================================================== */
// CREATE TRANSACTIONS
/* ==================================================================== */
export const createTransactions = createAsyncThunk(
  "transactions/createTransactions",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: req queries (if any)
      const { data } = await api.post(`/transaction`, payload);

      console.log(data)

      return data;
    } catch (error) {
      console.log(error.response ? error.response.data : error);
      return rejectWithValue(error.response ? error.response.data : error);
    }
  }
);