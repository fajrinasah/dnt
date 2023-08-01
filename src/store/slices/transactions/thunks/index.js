import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../../utils/api.instance";
import { toast } from "react-hot-toast";
import { toastError, toastSuccess } from "../../../../components/02-molecules/forAuthAndManage/customToasts";


/* ==================================================================== */
// CREATE TRANSACTIONS
/* ==================================================================== */
export const createTransactions = createAsyncThunk(
  "transactions/createTransactions",
  async (payload, { rejectWithValue }) => {
    try {
      // payload:(products)
      const { data } = await api.post(`/transaction`, payload);

      toastSuccess(data?.message);

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);