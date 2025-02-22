import { createAsyncThunk } from "@reduxjs/toolkit";
import { RecentTrack } from "../../../models/Track";
import { fetchRecentlyPlayed, fetchTopTracks } from "../../../api/api";

export const fetchRecentlyPlayedThunk = createAsyncThunk<
  RecentTrack[],
  { limit: number; after?: number },
  { rejectValue: string }
>("tracks/fetchRecentlyPlayed", async ({ limit = 20 }, { rejectWithValue }) => {
  try {
    const data = await fetchRecentlyPlayed(limit);
    return data.items;
  } catch (error: any) {
    return rejectWithValue(
      error.message || "Failed to fetch recently played tracks"
    );
  }
});

export const fetchTopTracksThunk = createAsyncThunk(
  "top-tracks/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTopTracks();
      return data?.items;
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
