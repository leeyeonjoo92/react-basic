import React, { useState } from "react";

import "./PaymentForm.css";

// PaymentForm의 부모컴포넌트(App 컴포넌트)에서 콘솔 찍고
// form data 받기
// 부모컴포넌트의 함수를 props로 받을수있음
// => 자식컴포넌트는 부모컴포넌트에 props로 보낼 수 없음!!
// 중괄호 붙여서 작성해야함!! => 함수정의 안됨
const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
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
  const buttonSubmitHander = (event) => {
    event.preventDefault();

    // getPaymentFormData 함수를 만들때 값을 바로 콘솔로 찍을수있게 만들었기 때문에
    // 이렇게 작성하면 console.log(objectState)와 같은 뜻
    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
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
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
