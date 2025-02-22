import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/tracks/slices/categorySlice";
import authReducer from "../features/auth/slices/authSlice";
import trackReducer from "../features/tracks/slices/trackSlice";
import artistReducer from "../features/artists/slices/artistSlice";
import topTracksReducer from "../features/user-echoes/slices/topTracksSlice";
import topArtistsReducer from "../features/user-echoes/slices/topArtistsSlice";
import userPlaylistsReducer from "../features/user-echoes/slices/userPlaylistsSlice";
import recentlyPlayedReducer from "../features/user-echoes/slices/recentlyPlayedSlice";
import albumsReducer from "../features/user-echoes/slices/albumSlice";

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authReducer,
    tracks: trackReducer,
    artists: artistReducer,
    albums: albumsReducer,
    topTracks: topTracksReducer,
    topArtists: topArtistsReducer,
    userPlaylists: userPlaylistsReducer,
    recentlyPlayed: recentlyPlayedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
