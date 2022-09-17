import React from "react";
import Classes from "./P13App.module.css";

function P13App(props) {
  return (
    <div className={Classes.main}>
        <b>Direction row (same for column with y-axis)</b> <br></br>
      <b>1. justify-content: Center</b>
      <div className={Classes.container1}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>2. justify-content : Space Between</b>
      <div className={Classes.container2}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>3. justify-content : Space Around</b>
      <div className={Classes.container3}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>4. justify-content : Space Evenly</b>
      <div className={Classes.container4}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>5. justify-content : flex end (flex start is default)</b>
      <div className={Classes.container5}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>6. Aline item : Center</b>
      <div className={Classes.container6}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>7. Aline item : flex start (reverse in flex end)</b>
      <div className={Classes.container7}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
      <b>8. Aline item : Baseline</b>
      <div className={Classes.container8}>
        <div className={[Classes.item1, Classes.item].join(" ")}>1</div>
        <div className={[Classes.item2, Classes.item].join(" ")}>2</div>
        <div className={[Classes.item3, Classes.item].join(" ")}>3</div>
        <div className={[Classes.item4, Classes.item].join(" ")}>4</div>
        <div className={[Classes.item5, Classes.item].join(" ")}>5</div>
      </div>
    </div>
  );
}

export default P13App;
