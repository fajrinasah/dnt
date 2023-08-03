import { createSlice } from "@reduxjs/toolkit";

import { isErrorOccured } from "../auth";

// THUNKS
import { createSalesReports, getProductsSold, getSalesAggregates } from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  salesReports: null,
  salesAggregates: null,
  productsSold: null
};

/* ==================================================================== */
// PRODUCTS SLICE
/* ==================================================================== */
const reportsSlice = createSlice({
  name: "reports",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    // CREATE SALES REPORTS
    builder.addCase(createSalesReports.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(createSalesReports.fulfilled, (state, action) => {
      state.isLoading = false;
      state.salesReports = action.payload?.salesReports;
    });

    // CREATE SALES AGGREGATES
    builder.addCase(getSalesAggregates.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getSalesAggregates.fulfilled, (state, action) => {        
      state.isLoading = false;
      state.salesAggregates = action.payload?.salesAggregate;
    });

    // GERT PRODUCTS SOLD
    builder.addCase(getProductsSold.pending, (state, action) => {
        state.isLoading = true;
      });
  
      builder.addCase(getProductsSold.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsSold = action.payload?.productsSold;
      });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default reportsSlice.reducer;
