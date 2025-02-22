import { RouterProvider } from "react-router";

import { ThemeContextProvider } from "./context/ThemeContext";
import router from "./router";
import { getAccessTokenFromUrl } from "./api/authSpotify";

window.addEventListener("load", () => {
  const token = getAccessTokenFromUrl();
  if (token) {
    localStorage.setItem("spotify_token", token);
    window.history.pushState({}, "", "/");
  }
});

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const tokenFromUrl = getAccessTokenFromUrl();
  //   const tokenStoraged = localStorage.getItem("spotify_token");
  //   console.log("se ejecuto aca en app.tsx", tokenFromUrl);
  //   if (tokenFromUrl || tokenStoraged) {
  //     const token = tokenFromUrl || tokenStoraged;
  //     dispatch(login(token!));
  //   }
  // }, [dispatch]);
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
