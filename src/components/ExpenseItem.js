import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
  const { dispatch, Location } = useContext(AppContext);

  const handleDeleteItem = () => {
    const item = {
      name: props.name,
    };

    dispatch({
      type: "DELETE_ITEM",
      payload: item,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {props.Location} {props.allocated}
      </td>
      <td>
        <FaPlusCircle
          size="2.2em"
          color="green"
          onClick={handleDeleteItem}
        ></FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="2.2em"
          color="red"
          onClick={handleDeleteItem}
        ></FaMinusCircle>
      </td>
      <td>
        <FaTimesCircle
          size="0.9em"
          color="black"
          onClick={handleDeleteItem}
        ></FaTimesCircle>
      </td>
    </tr>
  );
};

export default ExpenseItem;
