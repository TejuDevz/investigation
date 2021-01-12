import React from "react";
import "./Whys.css";

function Whys() {
  return (
    <div className="whys">
      <h2>{localStorage.getItem("factorName")}</h2>
      <div className="whys__addWhys">
        <div className="whys__evaluations">
          <h5 id="linethrough_text">Evaluation 1</h5>
          <div className="whys__whys">
            <div className="factors__why">
              <h6>Why 1</h6>
              <textarea className="form-control why__input why_info"></textarea>
              <div>
                <h6>Confirmed?</h6>
                <input className="check1" type="checkbox" />
              </div>
              <div>
                <h6>Root Cause?</h6>
                <input className="check2" type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whys;
