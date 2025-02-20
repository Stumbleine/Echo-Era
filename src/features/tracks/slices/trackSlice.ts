import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "../../../models/Track";
import { fetchTopTracksThunk } from "../thunks/tracksThunk";

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
      .addCase(fetchTopTracksThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopTracksThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
        state.featuredTrack = action.payload[0];
      })
      .addCase(fetchTopTracksThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setTracks, setFeaturedTrack } = trackSlice.actions;
export default trackSlice.reducer;
