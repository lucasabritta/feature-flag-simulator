import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FeatureFlagProvider } from "./feature-flags/feature-flag-provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FeatureFlagProvider>
      <App />
    </FeatureFlagProvider>
  </React.StrictMode>
);
