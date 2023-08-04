import { createSlice } from "@reduxjs/toolkit";

import { toastBlank } from "../../../../src/components/02-molecules/forAuthAndManage/customToasts";

// THUNKS
import {
  verifyOtpToken,
  resetPassword,
  login,
  keepLogin,
  forgotPassword,
  logout,
  changePhotoProfile,
} from "./thunks";

// INITIAL STATE
const INITIAL_STATE = {
  isLoading: false,
  user: {
    email: "",
    username: "",
    photo_profile: "",
    role_id: 0,
    user_status_id: 0,
    created_at: "",
    updated_at: "",
  },
};

// GLOBAL ERROR HANDLER
export const isErrorOccured = (action) => {
  return action.type.endsWith("rejected");
};

// GLOBAL SUCCESS HANDLER
const isAuthSuccess = (action) => {
  return [login.fulfilled.type, keepLogin.fulfilled.type].includes(action.type);
};

/* ==================================================================== */
// AUTH SLICE
/* ==================================================================== */
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    // VERIFY OTP TOKEN
    builder.addCase(verifyOtpToken.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(verifyOtpToken.fulfilled, (state, action) => {
      state.isLoading = false;
    });

    // FORGOT PASSSWORD
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.isForgotPasswordLoading = true;
    });

    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.isForgotPasswordLoading = false;
    });

    // RESET PASSSWORD
    builder.addCase(resetPassword.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.isLoading = false;

      //remove token from local storage
      localStorage.removeItem("token");
    });

    // LOGIN
    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });

    // KEEP LOGIN
    builder.addCase(keepLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    // LOGOUT
    builder.addCase(logout.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state = Object.assign(state, INITIAL_STATE);
    });

    // CHANGE PHOTO PROFILE
    builder.addCase(changePhotoProfile.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(changePhotoProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user.photo_profile = action.payload;
    });

    /*===================================================*/
    // ERROR HANDLER
    builder.addMatcher(isErrorOccured, (state, action) => {
      state.isLoading = false;

      console.error(action.payload);
    });

    // SUCCESS HANDLER
    builder.addMatcher(isAuthSuccess, (state, action) => {
      state = Object.assign(state, {
        isLoading: false,
        user: action.payload?.user,
      });
    });
  },
});

export default authSlice.reducer;
