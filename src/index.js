import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./Fonts/Apercu-pro/apercu_bold_pro.otf";
import "./Fonts/Apercu-pro/apercu_medium_pro.otf";
import "./Fonts/Apercu-pro/apercu_regular_pro.otf";

import "./Fonts/Tiempos-Headline/TiemposHeadline-Black.otf";
import "./Fonts/Tiempos-Headline/TiemposHeadline-Bold.otf";
import "./Fonts/Tiempos-Headline/TiemposHeadline-Light.otf";
import "./Fonts/Tiempos-Headline/TiemposHeadline-Medium.otf";
import "./Fonts/Tiempos-Headline/TiemposHeadline-Regular.otf";
import "./Fonts/Tiempos-Headline/TiemposHeadline-Semibold.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
