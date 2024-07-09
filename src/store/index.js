import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// createSlice({}) : reducer와 action을 편리하게 관리할 수 있음
const counterSlice = createSlice({
  // name: state 속성값
  name: "counter",
  // state 초기값
  initialState,
  // 만들었던 모든 reducer 넣어주면됨
  reducers: {
    // 이런식으로 작성하는걸 인라인 액션이라고 함
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // action의 payload로 값을 변경하기 때문에
    // action도 받아줘야함
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    // true, false만 받아주면 되기 때문에 action은 필요없음
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// configureStore : 여러개의 reducer를 하나의 store에서 관리할수있음
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// slice.actions : 각 컴포넌트에서 바로 dispatch해서 쓸수있음
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
