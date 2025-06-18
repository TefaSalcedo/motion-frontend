import React from "react";
import "./crudLoading.css";

const Loading = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Conectando con el servidor... Puede tardar unos segundos</p>
  </div>
);

export default Loading;