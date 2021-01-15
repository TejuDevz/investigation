import React, { useState } from "react";
import "./Rootcause.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Rootcause() {
  const [rootOpen, setRootOpen] = useState(false);

  const dropdownRoot = () => {
    if (rootOpen === false) {
      setRootOpen(true);
    } else {
      setRootOpen(false);
    }
  };

  return (
    <div className="rootcause">
      <div className="padding">
        <div className="rootcause__dropdown">
          <h2 onClick={dropdownRoot}>Root Cause Statement</h2>
          {rootOpen ? (
            <RemoveIcon onClick={dropdownRoot} />
          ) : (
            <AddIcon onClick={dropdownRoot} />
          )}
        </div>
        <hr id="hr"></hr>
        <div className="rootcause__main">
          <div className="rootcause__header">
            <h4>Root Cause Category</h4>
            <h4>Root Cause Comment</h4>
            <h4>Management System Element</h4>
            <h4>Corrective & Preventative Action</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rootcause;
