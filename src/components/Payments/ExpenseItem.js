import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <div
          className="expense-item__color"
          style={{
            width: "30px",
            height: "30px",
            background: props.color,
            borderRadius: "50%",
          }}
        ></div>
        <div className="expense-item__checkbox">
          {props.isChecked ? "🖤" : "🤍"}
        </div>
        <div style={{ width: "50px", height: "50px" }}>
          <img
            src={props.imgUrl}
            alt={props.imgUrl}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <button onClick={() => props.deleteExpenseItem(props.index)}>
          삭제하기
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
