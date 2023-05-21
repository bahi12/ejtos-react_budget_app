
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining,currency  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
                setCost("");
                return;
            }


        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };
  return (
    <div>
      <h2>Change allocation</h2>
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
            >{currency}</span>
            <input
              required="required"
              type="number"
              id="cost"
              step="10"
              value={cost}
              style={{ size: 10 }}
              onChange={(event) => setCost(event.target.value)}
            ></input>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginLeft: "2rem" }}
              onClick={submitEvent}
            >
              Save
            </button>
          </div>
        </div>
    </div>
  );
};

export default AllocationForm;
