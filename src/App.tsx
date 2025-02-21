import { RouterProvider } from "react-router";

import { ThemeContextProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import router from "./router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeContextProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeContextProvider>
    </AuthProvider>
  );
}

export default App;
