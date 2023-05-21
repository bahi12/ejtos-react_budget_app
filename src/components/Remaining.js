import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const remaining = budget - totalExpenses;
  return (
    <div className="col-2 m-1 alert alert-primary">
      <span>
        Remaining: {currency}
        {remaining}
      </span>
    </div>
  );
};
export default Remaining;
