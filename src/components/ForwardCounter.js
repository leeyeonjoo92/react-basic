import { useState, useEffect } from "react";
import Card from "./UI/Card/Card";
import useCounter from "../hooks/useCounter";

const ForwardCounter = () => {
  // 만든 커스텀훅을 가져와서 사용할수있음
  const counter = useCounter(true);
  console.log("counter", counter);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
