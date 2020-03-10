import React, { Component } from "react";
import stepUn from "../images/step1.png";
import stepDos from "../images/step2.png";
import stepTres from "../images/step3.png";
class HowItWork extends Component {
  render() {
    return (
      <div className="row ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 guide-title">
              <h2>How it works</h2>
            </div>
            <div className="col-md-4 guideLine-step">
              <div>
                <img src={stepUn} alt="set up" />
                <h3>Step uno</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet, <br /> consectetuer
                adipising elit, <br />sed do eius.
              </p>
            </div>
            <div className="col-md-4 guideLine-step">
              <div>
                <img src={stepDos} alt="set up" />
                <h3>Step dos</h3>
              </div>
              <p>
              Lorem ipsum dolor sit amet, <br /> consectetuer
                adipising elit, <br />sed do eius.
              </p>
            </div>
            <div className="col-md-4 guideLine-step">
              <div>
                <img src={stepTres} alt="set up" />
                <h3>Step tres</h3>
              </div>
              <p>
              Lorem ipsum dolor sit amet, <br /> consectetuer
                adipising elit, <br />sed do eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWork;
