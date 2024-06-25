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
      color: "#ffffff",
      isChecked: true,
    },
    {
      id: "e2",
      title: "물티슈",
      amount: 12.33,
      date: new Date(2025, 8, 14),
      color: "#000000",
      isChecked: false,
    },
    {
      id: "e3",
      title: "행주",
      amount: 12.33,
      date: new Date(2025, 8, 14),
      color: "#ffff00",
      isChecked: true,
    },
  ]);

  const getPaymentFormData = (data) => {
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        color: data.color,
        isChecked: data.isChecked,
      },
      ...expenses,
    ]);
  };

  const deleteExpenseItem = (index) => {
    // 삭제 방법 2. slice
    const beforeArray = expenses.slice(0, index);
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
