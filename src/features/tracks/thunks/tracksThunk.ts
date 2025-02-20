import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopTracks } from "../../../api/api";

export const fetchTopTracksThunk = createAsyncThunk(
  "top-tracks/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTopTracks();
      return data.items;
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

export const fetchTracksThunk = createAsyncThunk(
  "tracks/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTopTracks();
      return data.categories.items;
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
