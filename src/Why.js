import React from "react";
import "./Why.css";

function why({ num }) {
  return (
    <div className="why">
      <div className="why__whys">
        <div className="factors__why">
          <div className="why__text">
            <h5>Why {num}</h5>
            <textarea className="why__input" />
          </div>
          <div className="why__checks">
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
  );
}

export default why;
