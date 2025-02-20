import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../../api/api";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategories();
      console.log("data", data);
      return data?.categories?.items;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(
        error.message || "Ocurrió un error al obtener las categorías"
      );
    }
  }
);
