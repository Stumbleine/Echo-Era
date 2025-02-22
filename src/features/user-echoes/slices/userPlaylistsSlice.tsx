import { createSlice } from "@reduxjs/toolkit";
import { Playlist } from "../../../models/Playlist";
import { fetchUserPlaylistsThunk } from "../thunks/playlistsThunk";

interface PlaylistState {
  playlists: Playlist[];
  loading: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
}

const initialState: PlaylistState = {
  playlists: [],
  loading: false,
  error: null,
  offset: 0,
  hasMore: true,
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    resetPlaylists: (state) => {
      state.playlists = [];
      state.offset = 0;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserPlaylistsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserPlaylistsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.playlists = [...state.playlists, ...action.payload];
        state.offset = state.playlists.length;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchUserPlaylistsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetPlaylists } = playlistSlice.actions;
export default playlistSlice.reducer;
