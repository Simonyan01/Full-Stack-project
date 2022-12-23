import React from "react";
import ReactDOM from "react-dom/client";
import Route from "./Router/Route";
import { AuthProvider } from "./Components/Authentication/context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Route />
    </AuthProvider>
  </React.StrictMode>
);
