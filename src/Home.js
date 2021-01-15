import React, { useState } from "react";
import "./Home.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Evaluation from "./Evaluation";
import Evals from "./Evals";
import Rootcause from "./Rootcause";

function Home() {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [evals, setEvals] = useState(false);

  const showDropdown = () => {
    displayDropdown ? setDisplayDropdown(false) : setDisplayDropdown(true);
  };

  const [factorName, setFactorName] = useState("");
  const [displayWhy, setDisplayWhy] = useState(false);

  const add_factor = () => {
    if (factorName === "") {
      document.getElementById("warning").style.display = "block";
    } else {
      setDisplayWhy(true);
    }
  };
  return (
    <div className="main">
      {displayWhy ? (
        <div className="whys">
          <h3>Contributing factor:&nbsp;&nbsp;&nbsp;{factorName}</h3>
          <div className="whys__addWhys">
            <hr></hr>
            <div className="whys__evaluations">
              <h4 id="linethrough_text">
                <span>EVALUATIONS</span>
              </h4>
              <br />
              <Evaluation dis={setDisplayWhy} evalu={setEvals} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="home">
            <div className="dropdown__padding">
              <div className="factors__dropdown">
                {displayDropdown ? (
                  <RemoveIcon onClick={showDropdown} />
                ) : (
                  <AddIcon onClick={showDropdown} />
                )}
                <h2 onClick={showDropdown}>Contributing Factors & Why's</h2>
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
                        <button
                          className="btn btn-primary"
                          onClick={add_factor}
                        >
                          <AddIcon />
                          Add
                        </button>
                      </div>
                      <p id="warning">Please enter a factor name</p>
                    </div>
                  </div>
                  <br></br>
                  <hr></hr>
                  {evals ? <Evals factor={factorName} /> : ""}
                </div>
              ) : (
                console.log()
              )}
            </div>
          </div>
          <Rootcause />
        </div>
      )}
    </div>
  );
}

export default Home;
