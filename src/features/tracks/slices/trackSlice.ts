import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../../../models/Track";
import {
  fetchRecommendationsThunk,
  fetchTopTracksThunk,
  fetchTracksWithFiltersThunk,
} from "../thunks/tracksThunk";

interface TrackState {
  tracks: Track[];
  featuredTrack: Track | null;
  loading: boolean;
  error: string | null;
}

const initialState: TrackState = {
  tracks: [],
  featuredTrack: null,
  loading: false,
  error: null,
};

const trackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setTracks: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
    setFeaturedTrack: (state, action: PayloadAction<Track>) => {
      state.featuredTrack = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendationsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecommendationsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
        state.featuredTrack = action.payload[0];
      })
      .addCase(fetchRecommendationsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchTracksWithFiltersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTracksWithFiltersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(fetchTracksWithFiltersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTracks, setFeaturedTrack } = trackSlice.actions;
export default trackSlice.reducer;
