import "./App.css";
// import P1App from './Components/Pages/Page1/P1App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Error from "./Components/404/Error";
import P1App from "./Components/Pages/Page1/P1App";
import P2App from "./Components/Pages/Page2/P2App";
import P3App from "./Components/Pages/Page3/P3App";
import P4App from "./Components/Pages/Page4/P4App";
import P5App from "./Components/Pages/Page5/P5App";
import P6App from "./Components/Pages/Page6/P6App";
import P7App from "./Components/Pages/Page7/P7App";
import Layout from "./Layout/Layout";
// import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/app1" element={<P1App />} />
            <Route path="/app2" element={<P2App />} />
            <Route path="/app3" element={<P3App />} />
            <Route path="/app4" element={<P4App />} />
            <Route path="/app5" element={<P5App />} />
            <Route path="/app6" element={<P6App />} />
            <Route path="/app7" element={<P7App />} />
            <Route path="/app8" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
