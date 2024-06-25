import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    // today: null,
    today: new Date(),
  });

  const inputTypeTextChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const inputTypeNumberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const inputTypeDateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };
  const buttonSubmitHandler = (event) => {
    // 이벤트의 기본기능 차단
    event.preventDefault();
    console.log(objectState);
    // 처음값으로 초기화
    setObjectState({
      name: "",
      price: 0,
      // 날짜값은 초기화가 안됨
      // today: null,
      // new Date()로 수정시 초기화됨
      today: new Date(),
    });
  };

  return (
    // submit 버튼 이벤트가 발생했을때 이벤트를 감지
    <form onSubmit={buttonSubmitHandler}>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          <input
            type="text"
            value={objectState.name}
            onChange={inputTypeTextChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>금액</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={objectState.price}
            onChange={inputTypeNumberChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={objectState.today}
            onChange={inputTypeDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="submit" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
