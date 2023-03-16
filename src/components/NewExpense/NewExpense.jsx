import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // รับข้อมูลมาจาก Component ExpenseForm มาเก็บไว้ใน enteredExpenseData
  const saveExpenseDataHendler = (enteredExpenseData) => {
    const expenseData = {
      // ...enteredExpenseData นำข้อมูลจาก Form มากระจาย
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // ส่งข้อมูลไปยัง Component App
    props.addExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  // ส่งข้อมูลไปยัง Component ExpenseForm
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* ประกาศชื่อ props เป็น  saveExpenseData เพื่อดึงค่า ในบรรทัด 53 ของ Component ExpenseForm*/}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHendler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
