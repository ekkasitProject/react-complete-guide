import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  /* ถ้าเงื่อนไขคัดกรองแล้ว มากกว่า 0 ให้แสดง props.items รับข้อมูลแบบคัดกรอง จึงเรียกฟังก์ชั่น props.items แทน จึงแสดงผลแบบคัดกรองข้อมูล*/
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses. </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
