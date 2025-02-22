import { createAsyncThunk } from "@reduxjs/toolkit";
import { Album } from "../../../models/Album";
import { fetchSavedAlbums } from "../../../api/api";

export const fetchSavedAlbumsThunk = createAsyncThunk<
  Album[],
  { limit: number; offset: number },
  { rejectValue: string }
>("albums/fetchSavedAlbums", async ({ limit, offset }, { rejectWithValue }) => {
  try {
    const data = await fetchSavedAlbums(limit, offset);
    return data.items;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch saved albums");
  }
});
