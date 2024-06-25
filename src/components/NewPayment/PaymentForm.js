import React, { useState } from "react";

import "./PaymentForm.css";

// input에서 값을 받아서 콘솔에 찍기
const PaymentForm = () => {
  // 상태는 무조건 컴포넌트 안에서 만들어야됨
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: null,
  });

  // 이벤트 핸들러
  // event : 발생하는 이벤트와 관련된 모든값들이 들어가있음
  // event.target.value : 값을 찍을때마다 값을 받아옴
  const inputTypeTextChangeHandler = (event) => {
    // 이전 상태를 prevState 매개변수로 받아서
    // name은 바뀐값으로 업데이트하고 나머지는 이전값을 그대로 가지고있음
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
  const buttonSubmitHandler = () => {
    console.log("name", objectState.name);
    console.log("price", objectState.price);
    console.log("today", objectState.today);
  };

  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>이름</label>
          {/* value : input에 입력된 값을 받을수있음 */}
          {/* onChange : input의 값이 바뀌는 이벤트가 발생하면 핸들러 실행 */}
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
        <button type="button" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
