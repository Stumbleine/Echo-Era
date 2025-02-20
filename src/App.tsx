import { RouterProvider } from "react-router";

import { ThemeContextProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";
import router from "./router";

function App() {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  );
}

export default App;
