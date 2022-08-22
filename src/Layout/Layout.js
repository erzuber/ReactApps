import React from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <section style={{ marginBottom: "50px" }}></section>
      <Outlet />
    </>
  );
}

export default Layout;
