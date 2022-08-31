import React from "react";
import Classes from "./P12App.module.css";

function P12App(props) {
  return (
    <div className={Classes.P12}>
      <h1>Unit Convertion by z</h1>
      <input id='LHS' type='text'></input>
      <input id='Unit1' type='text' value='C'></input>
      <input id="RHS" type="text" ></input>
      <input id='Unit2' type='text' value='F'></input>
    </div>
  );
}

export default P12App;
