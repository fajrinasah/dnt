import { createSlice } from "@reduxjs/toolkit";

import { isErrorOccured } from "../auth";

// THUNKS
import {
  addCategory,
  editCategory,
  deleteCategory,
  getAllCategories,
  getProductCategories,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  currentProductCategories: [],
  currentCategory: {
    id: 0,
    name: "",
    created_at: "",
    updated_at: "",
  },
  categoriesList: [],
};

/* ==================================================================== */
// CATEGORIES SLICE
/* ==================================================================== */
const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,

  reducers: {
    setCurrentCategory: (state, action) => {
      // payload: id of category
      state.currentCategory = state.categoriesList.find(
        (obj) => obj.id === action?.payload
      );
    },
  },

  extraReducers: (builder) => {
    // ADD CATEGORY
    builder.addCase(addCategory.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // EDIT CATEGORY'S NAME
    builder.addCase(editCategory.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(editCategory.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // DELETE CATEGORY
    builder.addCase(deleteCategory.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // GET CATEGORIES LIST
    builder.addCase(getAllCategories.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoriesList = action.payload?.categories;
    });

    // GET PRODUCT'S CATEGORIES
    builder.addCase(getProductCategories.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getProductCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentProductCategories = action.payload?.categories;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });
  },
});

export default categoriesSlice.reducer;
