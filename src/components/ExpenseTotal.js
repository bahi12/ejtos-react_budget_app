import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const formattedTotalExpenses = isNaN(totalExpenses)
    ? "0"
    : totalExpenses.toFixed(2);

  return (
    <div className="col-3 m-1 alert alert-secondary">
      <span className="total-expense-label">Spent so far: </span>
      <span className="total-expense-value">
        {currency}
        {formattedTotalExpenses}
      </span>
    </div>
  );
};

export default ExpenseTotal;
