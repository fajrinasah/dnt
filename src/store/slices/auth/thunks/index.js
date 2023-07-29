import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import api from "../../../utils/api.instance";
import {
  toastBlank,
  toastError,
  toastSuccess,
} from "../../../../../src/components/02-molecules/forAuthAndManage/customToasts";

/* ==================================================================== */
// VERIFY OTP TOKEN
/* ==================================================================== */
export const verifyOtpToken = createAsyncThunk(
  "auth/verifyOtpToken",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: uuidWithContext --> req.params
      const { data } = await api.post(`/auth/verify-otp/${payload}`);

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// RESET (OR ADD) PASSWORD
/* ==================================================================== */
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {uuidWithContext, body: {password}}
      const { data } = await api.patch(
        `/auth/reset-password/${payload?.uuidWithContext}`,
        payload?.body
      );

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// LOGIN
/* ==================================================================== */
export const login = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {data, password}
      const { data, headers } = await api.post("/auth/login", payload);

      // get token from headers
      const token = headers?.authorization.split(" ")[1];

      // set token in local storage
      localStorage.setItem("token", token);

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
// KEEP LOGIN
/* ==================================================================== */
export const keepLogin = createAsyncThunk(
  "auth/keepLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.get("/auth/keep-login");

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
// FORGOT PASSWORD
/* ==================================================================== */
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: {email, context}
      const { data } = await api.post("/auth/request-otp", payload);

      <Navigate to="/" replace />;

      toastSuccess(data?.message);

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// LOGOUT
/* ==================================================================== */
export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, { rejectWithValue }) => {
    try {
      // remove token from local storage
      localStorage.removeItem("token");

      toastSuccess("Successfully logged out");

      return null;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);

/* ==================================================================== */
// CHANGE PHOTO PROFILE
/* ==================================================================== */
export const changePhotoProfile = createAsyncThunk(
  "auth/changePhotoProfile",
  async (payload, { rejectWithValue }) => {
    try {
      // payload: formData (file)
      // see postman for more details
      const { data } = await api.patch("/profiles/photo-profile", payload);

      toast.promise(data, {
        loading: toastBlank("Loading..."),
        success: toastSuccess(data?.message),
      });

      return data;
    } catch (error) {
      toastError(error.response ? error.response.data?.message : error);
      return rejectWithValue(
        error.response ? error.response.data?.message : error
      );
    }
  }
);
