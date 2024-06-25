import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
    color: "transparent",
    isChecked: false,
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const inputColorHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      color: event.target.value,
    }));
  };

  const inputCheckboxHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      isChecked: event.target.checked,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
      isChecked: false,
    });
  };

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHander}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
          <div className="new-payment__control">
            <label>색상 선택</label>
            <input
              type="color"
              onChange={inputColorHandler}
              value={objectState.color}
              style={{ height: "2.5rem" }}
            />
          </div>
          <div className="new-payment__control">
            <label>찜하기</label>
            <input
              type="checkbox"
              onChange={inputCheckboxHandler}
              checked={objectState.isChecked}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
