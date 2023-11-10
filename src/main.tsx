import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n/i18n"; // initialize i18n before App so it can access routes
import App from "./components/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./style/index.scss";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/configureStore.ts";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
