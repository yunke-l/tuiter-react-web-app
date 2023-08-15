import {createAsyncThunk} from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      return await authService.login(credentials);
    }
);
export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
      return await authService.profile();
    });
export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
      return await authService.logout();
    });
export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
      const updatedUser = await authService.updateUser(user);
      return updatedUser;
    });
export const registerThunk = createAsyncThunk(
    "user/registerUser",
    async (user) => {
      const registeredUser = await authService.register(user);
      return registeredUser;
    }
)
