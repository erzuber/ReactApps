import ExpenseItem from "../ExpenseItem/ExpenseItems";
import Card from "../Card/Card";
import "./Expenses.css";
// import { useState } from "react";

const Expenses = (props) => {
 
  // const [filterdYear, setFilteredYear]=useState('2020');
 
  // const filterChangeHandler = selectedYear => {
  //   setFilteredYear(selectedYear);
  // }

  return (
    <Card className="expenses">
      {props.items.map(expense => 
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      )}
    </Card>
  );
};

export default Expenses;