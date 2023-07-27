import { createSlice } from "@reduxjs/toolkit";

import { isErrorOccured } from "../auth";

// THUNKS
import {
  addCashier,
  editEmailCashier,
  inactivateCashier,
  getCashier,
  getAllCashiers,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  currentCashier: {
    email: "",
    username: "",
    photo_profile: "",
    user_status_id: 0,
    created_at: "",
    updated_at: "",
  },
  cashiersList: {
    page: 1,
    total_pages: 1,
    total_cashiers: 0,
    cashiers_limit: 0,
    cashiers: [],
  },
};

/* ==================================================================== */
// CASHIERS SLICE
/* ==================================================================== */
const cashiersSclice = createSlice({
  name: "cashiers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // ADD CASHIER
    builder.addCase(addCashier.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addCashier.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // EDIT EMAIL OF CURRENT CASHIER
    builder.addCase(editEmailCashier.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(editEmailCashier.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // INACTIVATE CASHIER
    builder.addCase(inactivateCashier.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(inactivateCashier.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET CASHIER'S DATA
    builder.addCase(getCashier.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getCashier.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentCashier = action.payload?.user;
    });

    // GET CASHIERS LIST
    builder.addCase(getAllCashiers.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAllCashiers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cashiersList = action.payload;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default cashiersSclice.reducer;
