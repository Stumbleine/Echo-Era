import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/tracks/slices/categorySlice";
import authReducer from "../features/auth/slices/authSlice";
import trackReducer from "../features/tracks/slices/trackSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authReducer,
    tracks: trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
