import React, { useState } from "react";
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
    console.log(data);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        // 강의에서는 이렇게 작성됨
        // => ExpenseDate 컴포넌트 파일에서 오류남
        // date: data.today,
        // 챗 GPT 검색결과 date 객체가 아니라서 나는 오류일 가능성
        // => 콘솔로 찍어본 결과 console.log(typeof data.today)는 String 타입
        // => state를 정의할때 date를 날짜객체로 받았는데 data.today가 문자열이라서 나는 오류
        date: new Date(data.today),
      },
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
