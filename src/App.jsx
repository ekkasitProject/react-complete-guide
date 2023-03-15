import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // รับข้อมูลมาจาก Component NewExpense มาเก็บไว้ใน expense
  const addExpenseHandler = (expense) => {
    console.log("In App.jsx");
    console.log(expense);
  };
  return (
    <div>
      {/* ประกาศชื่อ props เป็น  addExpense เพื่อดึงค่า ในบรรทัด 13 ของ Component NewExpense*/}
      <NewExpense addExpense={addExpenseHandler} />

      <Expenses item={expenses} />
    </div>
  );
};

export default App;
