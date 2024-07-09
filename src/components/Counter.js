import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
  };
  // useSelector 훅을 통해 state의 counter값을 가져옴
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  // action과 관련된 값을 인자로 넣어서 보내줌
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // 클릭할때마다 action이 reducer로 전달됨
    dispatch({ type: "increment" });
  };

  const increase10Handler = () => {
    // amount 라는 값을 담아서 전달해줌
    // amount -> payload
    dispatch({ type: "increase", amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>숫자 증가</button>
      <button onClick={increase10Handler}>숫자 10 증가</button>
      <button onClick={decrementHandler}>숫자 감소</button>
    </main>
  );
};

export default Counter;
