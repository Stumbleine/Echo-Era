import { createSlice } from "@reduxjs/toolkit";
import { RecentTrack } from "../../../models/Track";
import { fetchRecentlyPlayedThunk } from "../thunks/tracksThunk";

interface RecentlyPlayedState {
  tracks: RecentTrack[];
  loading: boolean;
  error: string | null;
  after: string | null;
  hasMore: boolean;
}

const initialState: RecentlyPlayedState = {
  tracks: [],
  loading: false,
  error: null,
  after: null,
  hasMore: true,
};

const recentlyPlayedSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    resetTracks: (state) => {
      state.tracks = [];
      state.after = null;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecentlyPlayedThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecentlyPlayedThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = [...state.tracks, ...action.payload];
        state.after =
          action.payload[action.payload.length - 1]?.played_at || null;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchRecentlyPlayedThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTracks } = recentlyPlayedSlice.actions;
export default recentlyPlayedSlice.reducer;
