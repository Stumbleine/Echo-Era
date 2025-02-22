import { createAsyncThunk } from "@reduxjs/toolkit";
import { Artist } from "../../../models/Artist";
import { fetchArtistsWithFilters } from "../../../api/api";

export const fetchArtistsThunk = createAsyncThunk<
  Artist[],
  { query: string; market: string; limit: number; offset: number },
  { rejectValue: string }
>(
  "artists-with-filter/fetch",
  async ({ query, market, limit, offset }, { rejectWithValue }) => {
    try {
      const data = await fetchArtistsWithFilters(query, market, limit, offset);
      return data.artists.items;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch artists");
    }
  }
);
