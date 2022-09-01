import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/User";

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
};

const initialState: AuthState = (() => {
  const localStorageUser = localStorage.getItem("user");
  const user: User = localStorageUser
    ? JSON.parse(localStorage.getItem("user") || "{}")
    : null;

  return {
    user: user || null,
    isLoggedIn: Boolean(user),
  };
})();

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state: AuthState, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoggedIn = Boolean(action.payload.accessToken);
    },
    logout(state: AuthState) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
