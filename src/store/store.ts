import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/songs/slices/categorySlice";
import authReducer from "../features/auth/slices/authSlice"

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;