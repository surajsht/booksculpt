import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CustomContext from "./context/CustomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomContext>
      <App />
    </CustomContext>
  </React.StrictMode>
);
