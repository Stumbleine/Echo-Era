import { RouterProvider } from "react-router";

import { ThemeContextProvider } from "./context/ThemeContext";
import router from "./router";
import { getAccessTokenFromUrl } from "./api/authSpotify";

window.addEventListener("load", () => {
  const token = getAccessTokenFromUrl();
  console.log("apptsx", localStorage);

  if (token) {
    localStorage.setItem("spotify_token", token);
    window.history.pushState({}, "", "/");
  }
});

function App() {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
