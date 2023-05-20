import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { expenses, Location, dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState("");

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setBudget(value);
    }
  };

  const handleSaveBudget = () => {
    dispatch({
      type: "SET_BUDGET",
      payload: parseInt(budget),
    });
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.unitprice * item.quantity);
  }, 0);

  const budgetValue = isNaN(budget)
    ? "No budget set yet"
    : Location + parseInt(budget);

  return (
    <div className="alert alert-primary">
      <span className="budget-label">Budget: </span>
      <input
        type="text"
        className="budget-value"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter budget"
      />
      <span>{isNaN(budgetValue) ? "" : budgetValue}</span>
      <button onClick={handleSaveBudget}>Save</button>
    </div>
  );
};

export default Budget;
