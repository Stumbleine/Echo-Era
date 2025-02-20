import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("spotify_token"), // Verifica si ya hay un token guardado
  token: localStorage.getItem("spotify_token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      localStorage.removeItem("spotify_token");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
