import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../../../models/Track";
import { fetchTracksWithFiltersThunk } from "../thunks/tracksThunk";

interface TrackState {
  tracks: Track[];
  featuredTrack: Track | null;
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: TrackState = {
  tracks: [],
  featuredTrack: null,
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
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
    resetTracks: (state) => {
      state.tracks = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracksWithFiltersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTracksWithFiltersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = [...state.tracks, ...action.payload];
        state.offset = state.tracks.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchTracksWithFiltersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTracks, setFeaturedTrack, resetTracks } = trackSlice.actions;
export default trackSlice.reducer;
