import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString("th-TH", { month: "long" });
  const day = date.toLocaleString("th-TH", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{month}</div>
      <div className="expense-date__month">{year}</div>
    </div>
  );
};

export default ExpenseDate;
