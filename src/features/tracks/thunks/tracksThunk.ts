import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTrackRecommendations,
  fetchTracksWithFilters,
} from "../../../api/api";
import { Track } from "../../../models/Track";

export const fetchRecommendationsThunk = createAsyncThunk(
  "tracks-recommendations/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTrackRecommendations();
      return data?.items;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(
        error.message || "An error occurred while retrieving trucks"
      );
    }
  }
);

export const fetchTracksWithFiltersThunk = createAsyncThunk<
  Track[],
  { genre: string; decade: number; offset: number },
  { rejectValue: string }
>(
  "tracksWithFilter/fetch",
  async ({ genre, decade, offset }, { rejectWithValue }) => {
    try {
      const limit = 20;
      const data = await fetchTracksWithFilters(genre, decade, limit, offset);
      return data?.tracks?.items;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data.error.message);
      }
      return rejectWithValue(
        error.message || "An error occurred while retrieving trucks"
      );
    }
  }
);
