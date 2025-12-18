import React from "react";
import logo from "../assets/images/nimbuz-logo.png";

export default function App() {
  return (
    <div className="container">
      <img src={logo} alt="Nimbuz Logo" className="logo" />
      <h2 class="mb-4 section-title">
        React Test Deployment Application with Webpack for{" "}
        <span class="highlight">Nimbuz Platform</span>
      </h2>
    </div>
  );
}
