import { createSlice } from "@reduxjs/toolkit";
import { Artist } from "../../../models/Artist";
import { fetchTopArtistsThunk } from "../thunks/artistsThunk";

interface TopArtistsState {
  topArtists: Artist[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: TopArtistsState = {
  topArtists: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

const topArtistsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    resetAlbums: (state) => {
      state.topArtists = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopArtistsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTopArtistsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.topArtists = [...state.topArtists, ...action.payload];
        state.offset = state.topArtists.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchTopArtistsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAlbums } = topArtistsSlice.actions;
export default topArtistsSlice.reducer;
