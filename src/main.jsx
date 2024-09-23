import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
);
