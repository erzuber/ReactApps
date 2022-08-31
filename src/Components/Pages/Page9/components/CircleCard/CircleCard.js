import React from "react";
import Classes from "./CircleCard.module.css";

function CircleCard(props) {
  let cls = props.lastSelected
    ? `${Classes.circle} ${Classes.lastSelected}`
    : `${Classes.circle}`;

  return <div className={cls}>{props.value}</div>;
}

export default CircleCard;
