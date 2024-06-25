import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          id={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;
