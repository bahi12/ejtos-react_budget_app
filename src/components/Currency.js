import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeCurrency = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-success">
      <span>Currency: </span>
      <select
        class="text-bg-secondary p4"
        name="currency"
        id="currency"
        onChange={(event) => changeCurrency(event.target.value)}
      >
        <option class="text-bg-secondary p4" value="£">
          £ Pound
        </option>
        <option class="text-bg-secondary p4" value="₹">
          ₹ Inda
        </option>
        <option class="text-bg-secondary p4" value="€">
          € Euro
        </option>
        <option class="text-bg-secondary p4" value="$">
          $ Dollar
        </option>
      </select>
    </div>
  );
};

export default Currency;
