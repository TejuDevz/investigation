import React, { useState } from "react";
import "./Home.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function Home() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const showDropdown = () => {
    displayDropdown ? setDisplayDropdown(false) : setDisplayDropdown(true);
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
                  />
                  <button className="btn btn-primary">
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
