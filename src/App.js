import "./App.css";
import React from "react";
import pg from "./pensaghana.png";
function App(props) {
  return (
    <div className="App">
      <section className="section-team">
        <div className="container">
          <div className="row mx-auto">
            {/* <div className="col-sm-6 col-lg-6 col-md-6 col-xl-6"></div> */}

            <div className="col-sm-6 col-lg-6 col-md-6 col-xl-4" id="node">
              <div className="single-person">
                <h3 className="speciality text-center">
                  I registered for PENSA GHANA CONFERENCE 2021
                </h3>
                <div className="person-image">
                  <img src={props.data && props.data.urls[0]} alt="" />
                  <span className="icon">
                    {/* <i className="fab fa-html5"> */} <img src={pg} />
                    {/* </i> */}
                  </span>
                </div>
                <div className="person-info text-center">
                  <h3 className="full-name">{props.data && props.data.name}</h3>
                  <span className="speciality">
                    {props.data && props.data.institution}
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="col-sm-6 col-lg-4 col-xl-3"></div>
            <div className="col-sm-6 col-lg-4 col-xl-3"></div> */}
          </div>
        </div>
      </section>
      <div className="row">
        <div
          className="col-lg-6 col-sm-6 col-md-6 mx-auto text-center"
          style={{ marginBottom: "20px" }}
        >
          <button
            onClick={props.screenshot}
            type="button"
            className="btn btn-primary"
          >
            Take screenshot
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
