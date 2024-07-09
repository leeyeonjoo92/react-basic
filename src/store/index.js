// 간단한 애플리케이션을 만들때는 store와 reducer를
// 한 파일에 작성하는게 관리하는데 편함

import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return {
      // 속성들이 많아지면 하나하나 입력해줄수 없음
      // 바뀌는 값들은 작성해주고
      // 바뀌지 않는 값들은 기존 state값을 그대로 가져옴
      ...state,
      counter: state.counter + 1,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
      // showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      // 속성을 여러개 사용할때 속성값을 입력하지 않으면
      // 이외의 속성을 undefined 처리함
      // counter라는 속성을 같이 가져가지 않으면 counter를 undefined 처리하기 떄문에 원하는대로 동작하지 않음
      // counter: state.counter,
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
