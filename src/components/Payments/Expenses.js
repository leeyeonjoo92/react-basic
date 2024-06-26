import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredPrice, setfilteredPrice] = useState(250);

  const filterChangeHandler = (rangePrice) => {
    setfilteredPrice(rangePrice);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.amount <= filteredPrice;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        value={filteredPrice}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>값이 없습니다.</p>
      )}
    </Card>
  );
};

export default Expenses;
