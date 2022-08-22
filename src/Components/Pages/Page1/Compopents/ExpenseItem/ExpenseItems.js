import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../Card/Card";
import ExDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    // console.log("Clicked!!");
    setTitle('Update!');
  };

  return (
    <Card className="expense-item">
      <ExDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
