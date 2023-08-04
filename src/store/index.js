import { configureStore } from "@reduxjs/toolkit";

// REDUCERS
import authReducer from "./slices/auth";
import cashiersReducer from "./slices/manageCashiers";
import categoriesReducer from "./slices/manageCategories";
import productsReducer from "./slices/manageProducts";
import transactionsReducer from "./slices/transactions";
import reportsSlice from "./slices/reports"

// configure store
const store = configureStore({
  reducer: {
    auth: authReducer,
    cashiers: cashiersReducer,
    categories: categoriesReducer,
    products: productsReducer,
    transactions: transactionsReducer,
    reports: reportsSlice
  },
});

export default store;
