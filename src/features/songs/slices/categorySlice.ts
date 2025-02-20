import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesThunk } from "../thunks/fetchCategoriesThunk";

const defaultCategories = ["Pop", "Rock", "Hip-Hop", "Electronic", "Jazz"];

interface Category{
  href: string
  name: string
  id: string,
  icons: []
}

interface CategoryState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoryState = {
  categories: [], // Usa valores por defecto hasta que cargue la API
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categorySlice.reducer;
