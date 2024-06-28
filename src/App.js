<<<<<<< Updated upstream
import './App.css';
import NewPayment from './components/NewPayment/NewPayment';

function App() {

  return (
    <NewPayment/>
  );
}
=======
import React from "react";
import Dropdown from "./components/Dropdown";

const App = () => {
  const options = [
    { label: "빨강", value: "red" },
    { label: "녹색", value: "green" },
    { label: "파랑", value: "blue" },
  ];

  return <Dropdown options={options} />;
};
>>>>>>> Stashed changes

export default App;
