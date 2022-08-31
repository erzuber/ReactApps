import React, { useState} from "react";
import "./P1App.css";
import Expenses from "./Compopents/Expenses/Expenses";
import NewExpense from "./Compopents/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
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

function P1App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default P1App;
