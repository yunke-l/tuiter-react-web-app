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
      await authService.updateUser(user);
      return user;
    });
export const registerThunk = createAsyncThunk(
    "user/registerUser",
    async ({username, password, firstName, lastName}) => {
      const userData = {
        username,
        password,
        firstName,
        lastName,
      };
      await authService.register(userData);
      return userData;
    }
)
