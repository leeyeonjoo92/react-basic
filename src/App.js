import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
    {
      id: "e2",
      title: "물티슈",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
    {
      id: "e3",
      title: "행주",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
  ]);

  const getPaymentFormData = (data) => {
    // 새로 입력한 값
    console.log("data :", data);
    // 기존에 있던 값
    console.log("expenses :", expenses);

    // 새로 입력한 값이 배열의 맨 처음이 되고
    // 기존에 있던 값은 하나씩 뒤로 밀리면서
    // 배열의 개수가 늘어나고, 인덱스값도 하나씩 밀려야 함
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
      // state값 추가하기
      // expenses는 배열인데 앞으로 갯수가 얼마나 늘어날지 모르기때문에 스프레드 연산자로 넣어주면됨
      ...expenses,
    ]);
  };

  // 삭제버튼은 ExpenseItems.js 파일에 작성함
  // 삭제하는 로직을 작성할 수 있는 파일이 여러개 있음
  // ExpenseItem / Expenses / App 이렇게 3개
  // App.js -> state를 다루는 로직은 state를 관리하는 로직에 가까이 붙여서 작성하는게 덜 헷갈림

  // 리스트에서 원하는 값을 정확히 찾으려면 겹치지 않는 값인 index를 매개변수로 받는게 좋음
  // 1. Expenses 컴포넌트에서 index값을 받아야하니까 함수를 props로 넘겨줌
  // 2. Expenses.js 파일에서 props.deleteExpenseItem로 받고, index값도 받음.
  // 3. ExpensesItem.js 파일에서도 버튼 클릭시 props.deleteExpenseItem.index를 받아줘야함
  const deleteExpenseItem = (index) => {
    // 삭제 방법 2. slice
    // 시작부터 끝까지 자름, 인덱스값 필요
    // 0 ~ index-1 인 배열과 index+1 ~ n-1 까지의 배열을 하나로 합치면됨
    // 0부터 index전까지
    const beforeArray = expenses.slice(0, index);
    // index+1부터 끝까지(끝까지는 생략가능)
    const afterArray = expenses.slice(index + 1);
    setExpenses([...beforeArray, ...afterArray]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

export default App;
