import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTopTracks,
  fetchTrackRecommendations,
  fetchTracksWithFilters,
} from "../../../api/api";
import { Track } from "../../../models/Track";

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
        error.message || "An error occurred while retrieving trucks"
      );
    }
  }
);

export const fetchRecommendationsThunk = createAsyncThunk(
  "tracks/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchTrackRecommendations();
      return data?.categories?.items;
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
  { category: string; mood: string; decade: number },
  { rejectValue: string }
>(
  "tracksWithFilter/fetch",
  async ({ mood, category, decade }, { rejectWithValue }) => {
    try {
      const data = await fetchTracksWithFilters(mood, category, decade);
      return data?.categories?.items;
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
