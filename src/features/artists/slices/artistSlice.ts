import { createSlice } from "@reduxjs/toolkit";
import { Artist } from "../../../models/Artist";
import { fetchArtistsThunk } from "../thunks/artistsThunk";

interface ArtistState {
  artists: Artist[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: ArtistState = {
  artists: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    resetArtists: (state) => {
      state.artists = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtistsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtistsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.artists = [...state.artists, ...action.payload];
        state.offset = state.artists.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchArtistsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetArtists } = artistSlice.actions;
export default artistSlice.reducer;
