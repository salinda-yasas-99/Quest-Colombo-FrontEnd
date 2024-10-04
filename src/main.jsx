import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#00b96b",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
