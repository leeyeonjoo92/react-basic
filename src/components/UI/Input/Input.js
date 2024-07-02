import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "./Login.module.css";

const Input = forwardRef((props, ref) => {
  // 자식컴포넌트에서 새로 선언해주고
  // 이걸 참조하면됨
  const inputRef = useRef();

  // ref를 핸들링하는 로직
  const active = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChage}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
