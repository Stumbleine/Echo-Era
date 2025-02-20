import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../../api/api";

const SPOTIFY_API_URL = "https://api.spotify.com/v1/browse/categories";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCategories();
      
      // Si la API de Spotify devuelve un objeto con la estructura { categories: { items: [...] } }
      return data.categories.items;
      
    } catch (error: any) {
      // Si es un error de la API de Spotify, probablemente tenga una estructura específica
      if (error.response) {
        return rejectWithValue(error.response.data.error.message);
      }
      // Para otros errores generales
      return rejectWithValue(error.message || 'Ocurrió un error al obtener las categorías');
    }
  }
);
