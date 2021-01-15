import React, { useState } from "react";
import "./Evals.css";

function Evals({ factor }) {
  const [displayWhys, setDisplayWhys] = useState(false);
  const expand = () => {
    if (displayWhys === false) {
      setDisplayWhys(true);
    } else {
      setDisplayWhys(false);
    }
  };

  return (
    <div className="eval">
      <div
        style={{
          backgroundColor: "white",
          padding: 1,
          cursor: "pointer",
        }}
        onClick={expand}
      >
        <h4>Contributing Factor: &nbsp;&nbsp;&nbsp;{factor}</h4>
      </div>
      {displayWhys ? (
        <div>
          <div className="eval__heading">
            <h4>Why 1</h4>
            <div>
              <h4>Confirmed?</h4>
              <h4>Root Cause?</h4>
            </div>
          </div>
          <div className="eval__body">
            <h4>Reason 1</h4>
            <div>
              <input type="checkbox" />
              <input type="checkbox" readOnly checked />
            </div>
          </div>
          <div className="eval__heading">
            <h4>Why 2</h4>
            <div>
              <h4>Confirmed?</h4>
              <h4>Root Cause?</h4>
            </div>
          </div>
          <div className="eval__body">
            <h4>Reason 2</h4>
            <div>
              <input type="checkbox" />
              <input type="checkbox" readOnly checked />
            </div>
          </div>
          <div className="eval__heading">
            <h4>Why 3</h4>
            <div>
              <h4>Confirmed?</h4>
              <h4>Root Cause?</h4>
            </div>
          </div>
          <div className="eval__body">
            <h4>Reason 3</h4>
            <div>
              <input type="checkbox" />
              <input type="checkbox" readOnly checked />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Evals;
