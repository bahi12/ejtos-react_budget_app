import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//Code to import Budget.js
import Budget from "./components/Budget";

// Add code to import the other components here under
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

import { AppProvider } from "./context/AppContext";
import Currency from "./components/Currency";

const App = () => {
  return (
    <AppProvider>
      <div className="row m-3">
        <h1 className="mt-2">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="row">
            {/* Add Budget component here */}
            <Budget />
            {/* Add Remaining component here */}
            <Remaining />
            {/* Add ExpenseTotal component here */}
            <ExpenseTotal />
            {/* Add ExpenseList component here */}
            <Currency />
            {/* Add ExpenseList component here */}
          </div>
          <ExpenseList />
          {/* Add ExpenseItem component here */}
          {/*<ExpenseItem />*/}
          {/* Add AllocationForm component here */}
          <AllocationForm />
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
