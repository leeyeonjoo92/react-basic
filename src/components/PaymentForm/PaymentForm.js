import React, { useState } from "react";

import styles from "./PaymentForm.module.css";

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

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  return (
    <div className={styles.newPayment}>
      <form onSubmit={buttonSubmitHander}>
        <div className={styles.newPaymentControls}>
          {/* 기존에는 똑같은 newPaymentControl 클래스명이었는데 */}
          {/* css module 방식으로 변경하고 개발자도구로 확인해보면 */}
          {/* PaymentForm_newPaymentControl__KDVFU 이런식으로 작성해줌 */}
          {/* 컴포넌트_클래스명__해시값 */}
          {/* 다른 컴포넌트에서 같은 클래스명을 사용해도 겹치지 않음 */}
          {/* objectState.name이 문자열일 경우에 isTrue 클래스 추가 */}
          <div
            className={`${styles.newPaymentControl} ${
              !objectState.name && styles.isTrue
            }`}
          >
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className={styles.newPaymentControl}>
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
        <div className={styles.newPaymentActions}>
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
