// import React, { useState} from "react";
import "./P1App.css";
import Expenses from "./Compopents/Expenses/Expenses";
import NewExpense from "./Compopents/NewExpense/NewExpense";

// This app is for expanse list and add expense
// some how broken need to fix

// Const App = () => {
function P1App() {
  const expenses = [
    {
      id: "e1",
      title: "Sugar",
      amount: 50.5,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Rice",
      amount: 100,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Petrol",
      amount: 200,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Hair cut",
      amount: 50,
      date: new Date(2021, 5, 12),
    },
  ];

  // const addExpenseHandler = expense =>{
  //   // console.log(expense);
  //   const [enteredData, setEnteredData] = useState("");
    
  //   setEnteredData()
  // }

  return (
    <div className="App">
      <NewExpense ></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default P1App;
