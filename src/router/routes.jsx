import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import MotionsPage from "../pages/crud";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motions" element={<MotionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
