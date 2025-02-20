import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router";
import { RootState } from "./store";
import AuthPage from "./features/auth/pages/AuthPage";
import MainLayout from "./layouts/MainLayout";
import ArtistsPage from "./features/artists/pages/ArtistsPage";
import { useEffect } from "react";
import TracksPage from "./features/tracks/pages/TracksPage";

export const RouteTracker = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Aquí puedes implementar tu lógica de tracking
    console.log("Route changed:", {
      path: location.pathname,
      search: location.search,
      type: navigationType,
      timestamp: new Date().toISOString(),
    });

    // Ejemplo: enviar a un servicio de analytics
    /*     trackRouteChange({
      path: location.pathname,
      search: location.search,
      type: navigationType,
    }); */
  }, [location, navigationType]);

  return null;
};

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token ? <Outlet /> : <Navigate to="/auth" replace />;
};

const router = createBrowserRouter([
  {
    path: "/auth",
    element: (
      <>
        <AuthPage />
        <RouteTracker />
      </>
    ),
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
        ],
      },
    ],
  },
]);

export default router;
