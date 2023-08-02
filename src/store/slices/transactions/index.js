import { createSlice } from "@reduxjs/toolkit";

import { isErrorOccured } from "../auth";

// THUNKS
import {
  createTransactions,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  productsList: {
    page: 1,
    total_pages: 1,
    total_products: 0,
    products_limit: 10,
    products: [],
  },
};

/* ==================================================================== */
// PRODUCTS SLICE
/* ==================================================================== */
const transactionsSlice = createSlice({
  name: "transactions",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {

    // CREATE TRANSACTIONS
    builder.addCase(createTransactions.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(createTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default transactionsSlice.reducer;