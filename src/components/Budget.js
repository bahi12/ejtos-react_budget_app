import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Currency from "./Currency";

const Budget = () => {
  const { dispatch } = useContext(AppContext);
  const [budget, setBudget] = useState("2000");

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

  const budgetValue = isNaN(budget)
    ? "No budget set yet"
    : Currency + parseInt(budget);

  return (
    <div className="col-4 m-1 alert alert-primary">
      <span className="budget-label">Budget: </span>
      <input
        type="number"
        step="10"
        className="budget-value"
        value={budget}
        onChange={handleBudgetChange}
        placeholder="Enter budget"
      />
      <span>{isNaN(budgetValue) ? "" : budgetValue}</span>
      <button className="btn btn-primary" onClick={handleSaveBudget}>
        Save
      </button>
    </div>
  );
};

export default Budget;
