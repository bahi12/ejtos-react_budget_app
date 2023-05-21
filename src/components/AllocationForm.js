import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = () => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [allocated, setAllocated] = useState("");
  const [action, setAction] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const expense = {
      name: name,
      cost: parseInt(allocated),
    };
    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
    setName("");
    setAllocated("");
    setAction("");
  };

  return (
    <div>
      <h2>Allocation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group mb-3" style={{ marginLeft: "2rem" }}>
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Items
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
              value={name}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Human Resource">Human Resource</option>
              <option value="IT">IT</option>
            </select>
            <div className="input-group-prepend" style={{ marginLeft: "2rem" }}>
              <label className="input-group-text" htmlFor="inputGroupSelect02">
                Action
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
              value={action}
            >
              <option value="Add">Add</option>
              <option value="Reduce">Reduce</option>
            </select>
            <span
              className="eco"
              style={{ marginLeft: "2rem", marginRight: "8px" }}
            ></span>
            <input
              required="required"
              type="number"
              id="allocated"
              value={allocated}
              style={{ size: 10 }}
              onChange={(event) => setAllocated(event.target.value)}
            ></input>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginLeft: "2rem" }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AllocationForm;
