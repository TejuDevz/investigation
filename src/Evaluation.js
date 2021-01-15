import React from "react";
import "./Evaluation.css";
import Why from "./Why";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useState } from "react";

function Evaluation({ dis, evalu }) {
  const addFactor = () => {
    evalu(true);
    dis(false);
  };

  return (
    <div className="evaluation">
      <div>
        <h4>Evaluation 1</h4>
        <div className="evaluation__evaluations">
          <Why num={1} />
          <Why num={2} />
          <Why num={3} />
        </div>
        <hr />
        <div className="evals">
          <AddCircleIcon
            style={{
              fontSize: 30,
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 5,
            }}
          />
          <h6
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 20,
              cursor: "pointer",
            }}
          >
            Add whys
          </h6>
        </div>
        <div className="add_factor">
          <button className="btn btn-primarya" onClick={addFactor}>
            Add Contributing factor
          </button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
