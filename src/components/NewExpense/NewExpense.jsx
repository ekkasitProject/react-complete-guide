import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  // รับข้อมูลมาจาก Component ExpenseForm มาเก็บไว้ใน enteredExpenseData
  const saveExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      // ...enteredExpenseData นำข้อมูลจาก Form มากระจาย
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // ส่งข้อมูลไปยัง Component App
    props.addExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* ประกาศชื่อ props เป็น  saveExpenseData เพื่อดึงค่า ในบรรทัด 53 ของ Component ExpenseForm*/}
      <ExpenseForm saveExpenseData={saveExpenseDataHendler} />
    </div>
  );
};

export default NewExpense;
