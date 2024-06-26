import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const rangeChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by price</label>
        <div>
          <span>{props.value}</span>
          <input
            type="range"
            min="1"
            max="300"
            value={props.value}
            onChange={rangeChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
