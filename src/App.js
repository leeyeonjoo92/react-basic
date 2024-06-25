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

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
