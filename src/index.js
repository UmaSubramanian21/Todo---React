import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div className="p-10 h-screen bg-green-200">
    <App />
  </div>
)