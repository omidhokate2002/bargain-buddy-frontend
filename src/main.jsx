import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: "#2C3531",
            colorPrimaryHover: "#2C3531",
            borderRadius: "2px",
          },
        },
        token: {
          borderRadius: "2px",
          colorPrimary: "#2C3531",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
