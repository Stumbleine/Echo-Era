import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserPlaylists } from "../../../api/api";
import { Playlist } from "../../../models/Playlist";

export const fetchUserPlaylistsThunk = createAsyncThunk<
  Playlist[],
  { limit: number; offset: number },
  { rejectValue: string }
>(
  "playlists/fetchUserPlaylists",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const data = await fetchUserPlaylists(limit, offset);
      return data.items;
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch user playlists");
    }
  }
);
