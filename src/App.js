import "./App.css";
// import P1App from './Components/Pages/Page1/P1App';
import P5App from "./Components/Pages/Page5/P5App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage/HomePage";
// import Header from "./Components/Header/Header";

function App() {
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

export default App;
