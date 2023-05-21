import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, dispatch, expenses, remaining } = useContext(AppContext);
  const [inputValue, setInputValue] = React.useState(budget);
  const [lastValidBudget] = React.useState(budget)
  const handleInputChange = (event) => {
    setInputValue(parseInt(event.target.value));  
  };

  
  const handleInputBlur = () => {
    const value = inputValue;
    const totalExpenses = expenses.reduce((total, item) => {
      return (total = total + item.cost);
    }, 0);

    if (isNaN(value)) {
      alert("Please enter a valid number!");
      setInputValue(lastValidBudget);
      return
    }

    if (value < totalExpenses) {
      alert("You can't reduce the budget that is already allocated!");
      setInputValue(lastValidBudget);
      return
      }

      else if (value > 20000){
        alert("You can't allocate more than" + currency + remaining + "!");
        setInputValue(20000);
      }
      else {
        dispatch({
          type: "SET_BUDGET",
          payload: value,
        });
      }
  };

  return (
    <div className="col-3 m-1 alert alert-primary">
      <span className="budget-label">Budget: {currency}</span>
      <input
        type="number"
        step="10"
        className="budget-value"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder="Enter budget"
      />

    </div>
  );
};

export default Budget;
