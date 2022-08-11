import React, { Fragment } from "react";
import Header from "./src/components/Layout/Header";
import Meals from "./src/components/Meals/Meals";

function P5App() {
  return (
    <Fragment>
      <Header />
      <Meals></Meals>
    </Fragment>
  );
}

export default P5App;
