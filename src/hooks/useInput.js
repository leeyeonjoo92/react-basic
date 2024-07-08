import { useState } from "react";

// validateValue -> 값이 유효한지 체크하는 함수
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // 이건 name에서만 쓰이는 로직
  // 커스텀훅 안에서 작성하는 것보다 props로 받아와서 쓰는게 좋음
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    // 다른 컴포넌트에서 가져다가 쓸때 value라고 작성해도 가져올수있음
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueInputChangeHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
