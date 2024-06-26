import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // expense -> 부모 컴포넌트에서 받아온 state
  // 필터 연도와 같은 연도를 가지고 있는 배열
  // items에서 expense값이 true가 나오는 것들만 가지고 있는 배열
  const filteredExpenses = props.items.filter((expense) => {
    // return true;
    // getFullYear는 number 인데
    // filteredYear가 string 이기 때문에 string으로 바꿔줘야함
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
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
