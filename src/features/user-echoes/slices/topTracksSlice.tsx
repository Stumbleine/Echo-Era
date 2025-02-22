import { createSlice } from "@reduxjs/toolkit";
import { Track } from "../../../models/Track";
import { fetchTopTracksThunk } from "../thunks/tracksThunk";

interface TopTracksState {
  topTracks: Track[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: TopTracksState = {
  topTracks: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

const topTracksSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    resetTracks: (state) => {
      state.topTracks = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopTracksThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopTracksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.topTracks = [...state.topTracks, ...action.payload];
        state.offset = state.topTracks.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchTopTracksThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetTracks } = topTracksSlice.actions;
export default topTracksSlice.reducer;
