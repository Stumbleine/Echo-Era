import { useSelector } from "react-redux";
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { RootState } from "./store";
import AuthPage from "./features/auth/pages/AuthPage";
import MainLayout from "./layouts/MainLayout";
import ArtistsPage from "./features/artists/pages/ArtistsPage";
import TracksPage from "./features/tracks/pages/TracksPage";
import AlbumsPage from "./features/user-echoes/pages/AlbumsPage";
import RecentlyPlayedPage from "./features/user-echoes/pages/RecentlyPlayedPage";
import PlaylistsPage from "./features/user-echoes/pages/PlaylistsPage";
import TopArtistsPage from "./features/user-echoes/pages/TopArtistsPage";
import TopTracksPage from "./features/user-echoes/pages/TopTracksPage";
import EchoesPage from "./features/user-echoes/pages/EchoesPage";

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? <Outlet /> : <Navigate to="/auth" replace />;
};

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          { index: true, element: <TracksPage /> },
          { path: "artists", element: <ArtistsPage /> },
          {
            path: "echoes",
            element: <EchoesPage />,
            children: [
              { path: "top-songs", element: <TopTracksPage /> },
              { path: "top-artists", element: <TopArtistsPage /> },
              { path: "my-playlists", element: <PlaylistsPage /> },
              { path: "recently-played", element: <RecentlyPlayedPage /> },
              { path: "saved-albums", element: <AlbumsPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
