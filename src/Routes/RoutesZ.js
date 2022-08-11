import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Components/Pages/HomePage/HomePage";
import P5App from "../Components/Pages/Page5/P5App";

function RoutesZ() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/Page1" element={<P5App />} />
          <Route path="/Page2" element={<div>Page2</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesZ;
