import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  // input에 값이 입력될때마다 실행되는 함수
  const goalInputChangeHandler = (event) => {
    // 값을 입력할때마다 isValid가 true여야함
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // 빈값인 경우 빨간색 배경
    // enteredValue === "" 라고 작성할 경우 "     " 이런식이어도 값이 입력됐다고 인식함
    // trim() : 모든 공백을 제외한 문자열
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
			setEnteredValue("");
      // return 해주지 않으면 아래 로직까지 통과해버림
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>목표</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            backgroundColor: isValid ? "transparent" : "salmon",
            borderColor: isValid ? "#CCC" : "red",
          }}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
