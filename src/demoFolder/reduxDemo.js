const redux = require("redux");

// reducer : 이전의 state, action 값을 받아서 새로운 state를 반환하는 함수
// counter의 초기값을 0으로 설정
// state가 값으로 받아지면 값을 리턴해주고
// 값이 없으면 counter: 0을 받겠다
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      // counter의 값이 기존 counter값에 +1 해서 리턴
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// 이 스토어는 리덕스에서 만든 스토어이며 counterReducer로 변화를 줌
const store = redux.createStore(counterReducer);

// console.log(store.getState()); // { counter: 0 }

const counterSubscriber = () => {
  // 그때마다 스토어의 가장 최신값을 가져와서 콘솔로 찍어주겠다
  const latestState = store.getState();
  console.log(latestState);
};

// 스토어에서 구독할때 함수를 통해서 구독하는데
store.subscribe(counterSubscriber);

// state와 action을 보내줘야함
// state는 counterReducer에서 보내주고 있으니까 action만 보내주면됨
// action의 type이 증가하는 값
store.dispatch({ type: "increment" }); // { counter: 1 }
store.dispatch({ type: "increment" }); // { counter: 2 }
store.dispatch({ type: "decrement" }); // { counter: 1 }
