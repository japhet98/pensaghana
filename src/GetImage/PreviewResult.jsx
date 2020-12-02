import React, { Component } from "react";
import pensa from "./pensa.jpg";
import cop from "./cop.jpg";
import pgc from "./pgc.png";
import unleash from "./unleash.png";
import "./index.css";
class PreviewResults extends Component {
  render() {
    return (
      <div className="container" style={{ width: "100%" }} id="main-content">
        <div class="card mx-auto" id="node">
          <div class="card-body">
            {/* TOP COMPONENT -> 
            PENSA AND COP LOGO
            YOUTH MINISTY & PENSA GHANA INSCRIPTION
            PGC LOGO
            NAME OF PARTICIPANT
            SECTOR OF PARTICIPANT

          */}
            <div className="container-fluid">
              <div className="row" style={{ width: "100%" }}>
                <div className="col top-left">
                  <img src={cop} alt="cop" id="cop" />
                  <img src={pensa} alt="pensa" id="pensa" />
                  <h6>THE COP - YOUTH MINISTRY</h6>
                  <h6 id="pg">
                    <b>PENSA GHANA</b>
                  </h6>
                </div>

                <div className="col top-right">
                  <img src={pgc} alt="cop" />
                </div>
              </div>
              <div className="row">
                <div className="col"></div>
                <div className="col det">
                  <h6 class="card-title " id="name">
                    <b>{this.props.data && this.props.data.name}</b>{" "}
                  </h6>
                  <h6 class="card-title" id="sector">
                    {this.props.data && this.props.data.institution}
                  </h6>
                </div>
              </div>
            </div>
            {/* END OF TOP COMPOENT */}

            {/* BOTTOM COMPONENT ->
            PICTURE OF PARTICIPANT
            UNLEASHING INSCRIPTION
        */}
            <div className="container-fluid bottom">
              <div className="row">
                <div class="badge badge-pill">
                  <h6>
                    <b>I have registered for</b>
                  </h6>
                  <img src={unleash} alt="unleash" id="unleash" />
                </div>
                <img
                  src={this.props.data && this.props.data.cropData}
                  alt="..."
                  class="img-fluid"
                  id="p-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-6 col-sm-6 col-md-6 mx-auto text-center"
            style={{
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            <button
              onClick={this.props.screenshot}
              type="button"
              className="btn btn-primary"
            >
              Download Flyer
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewResults;
