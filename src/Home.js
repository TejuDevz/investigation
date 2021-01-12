import React, { useState } from "react";
import "./Home.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const showDropdown = () => {
    displayDropdown ? setDisplayDropdown(false) : setDisplayDropdown(true);
  };
  const [factorName, setFactorName] = useState("");
  const add_factor = () => {
    if (factorName === "") {
      document.getElementById("warning").style.display = "block";
    } else {
      history.push(`/whys`);
      setFactorName("");
      localStorage.setItem("factorName", factorName);
    }
  };
  return (
    <div className="home">
      <div className="dropdown__padding">
        <div className="factors__dropdown">
          <h2 onClick={showDropdown}>Contributing Factors & Why's</h2>
          {displayDropdown ? (
            <RemoveIcon onClick={showDropdown} />
          ) : (
            <AddIcon onClick={showDropdown} />
          )}
        </div>
        <hr></hr>
        <br></br>
        {displayDropdown ? (
          <div className="contributing__factor">
            <div className="factors__addFactor">
              <h4>Add Contributing factor</h4>
              <br />
              <div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter contributing factor name"
                    value={factorName}
                    onChange={(e) => setFactorName(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={add_factor}>
                    <AddIcon />
                    Add
                  </button>
                </div>
                <p id="warning">Please enter a factor name</p>
              </div>
            </div>
            <br></br>
            <hr></hr>
          </div>
        ) : (
          console.log()
        )}
      </div>
    </div>
  );
}

export default Home;
