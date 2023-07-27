import { createSlice } from "@reduxjs/toolkit";

import { isErrorOccured } from "../auth";

// THUNKS
import {
  addProduct,
  getProduct,
  editProductImage,
  editProductInfo,
  editProductStatus,
  deleteProductCategories,
  getAllProducts,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  currentProduct: {
    id: 0,
    name: "",
    image: "",
    description: "",
    price: 0,
    product_status_id: 0,
    created_at: "",
    updated_at: "",
    categories: [],
  },
  productsList: {
    page: 1,
    total_pages: 1,
    total_products: 0,
    products: [],
  },
};

/* ==================================================================== */
// PRODUCTS SLICE
/* ==================================================================== */
const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,

  extraReducers: (builder) => {
    // ADD PRODUCT
    builder.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // EDIT PRODUCT'S IMAGE
    builder.addCase(editProductImage.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(editProductImage.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // EDIT PRODUCT'S INFO
    builder.addCase(editProductInfo.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(editProductInfo.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // EDIT PRODUCT'S STATUS
    builder.addCase(editProductStatus.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(editProductStatus.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // DELETE PRODUCT'S CATEGORIES
    builder.addCase(deleteProductCategories.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteProductCategories.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET PRODUCT'S DATA
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProduct = action.payload?.product?.[0];
    });

    // GET ALL PRODUCTS
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default productsSlice.reducer;
