import React from "react";
import ReactDOM from "react-dom/client";
//redux provider
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { Toaster } from "react-hot-toast";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
