import { createSlice } from "@reduxjs/toolkit";
import { ItemAlbum } from "../../../models/Album";
import { fetchSavedAlbumsThunk } from "../thunks/albumsThunk";

interface AlbumState {
  albums: ItemAlbum[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: AlbumState = {
  albums: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    resetAlbums: (state) => {
      state.albums = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSavedAlbumsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSavedAlbumsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.albums = [...state.albums, ...action.payload];
        state.offset = state.albums.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchSavedAlbumsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetAlbums } = albumSlice.actions;
export default albumSlice.reducer;
