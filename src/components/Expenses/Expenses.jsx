import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // คัดกรองข้อมูลจาก props.items เพื่อแสดงข้อมูลแบบ select จาก Component ExpensesFilter
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      {/* selected={filteredYear} เพื่อเซ็ต Default ในบรรทัด 14 ของ Component ExpensesFilter */}
      {/* ประกาศชื่อ props เป็น  ChangeFilter เพื่อดึงค่า ในบรรทัด 8 ของ Component ExpensesFilter*/}
      <ExpensesFilter
        selected={filteredYear}
        ChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      {/* แสดงผล expensesContent */}
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
