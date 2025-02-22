import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTopArtists } from "../../../api/api";
import { Artist } from "../../../models/Artist";

export const fetchTopArtistsThunk = createAsyncThunk<Artist[]>(
  "top-artists/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTopArtists();
      return data?.items;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch artists");
    }
  }
);
