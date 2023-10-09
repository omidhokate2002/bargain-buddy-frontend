import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ConfigProvider } from "antd";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
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
  </Provider>
);
