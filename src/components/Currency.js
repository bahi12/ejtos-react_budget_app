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
    <div className="col-3 m-1 alert alert-success">
      <span>Currency: </span>
      <select
        class="text-bg-success p4"
        name="currency"
        id="currency"
        onChange={(event) => changeCurrency(event.target.value)}
      >
        <option className="text-bg-success p4" value="$">
          $ Dollar
        </option>
        <option className="text-bg-success p4" value="£">
          £ Pound
        </option>
        <option className="text-bg-success p4" value="₹">
          ₹ Inda
        </option>
        <option className="text-bg-success p4" value="€">
          € Euro
        </option>
      </select>
    </div>
  );
};

export default Currency;
