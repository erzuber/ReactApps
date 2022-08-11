import React from "react";
import Header from "../../Header/Header";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Header />
      <section style={{
          marginTop: "100px"
        }}>
        <Outlet />
      </section>
    </div>
  );
}

export default HomePage;
