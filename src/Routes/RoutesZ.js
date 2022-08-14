import React from "react";
// import ReactDOM from "react-dom/client";


import P5App from "../Components/Pages/Page5/P5App";

function RoutesZ() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/app1" element={<P5App />} />
          <Route path="/app2" element={<div>Page2</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesZ;
