import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.allocated);
  }, 0);

  const formattedTotalExpenses = isNaN(totalExpenses)
    ? "0"
    : totalExpenses.toFixed(2);

  return (
    <div className="alert alert-secondary">
      <span className="total-expense-label">Total Expenses: </span>
      <span className="total-expense-value">
        {currency}
        {formattedTotalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;
