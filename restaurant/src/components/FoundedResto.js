import React, { Component } from "react";
import { Cards } from "./card";
class Founded extends Component {
  state = {};
  render() {
    return (
      <div className="row founded-restaurants">
        <div className="container restaurant-founded">
          <div className="row">
              <div className="col-md-12 founded-resto-title">
                  <h2>Our Restaurants</h2>
              </div>
          </div>
        <div className="row">
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
          <div className="col-md-3 founded-rest"><Cards/></div>
        </div>
      </div>
      </div>
      
    );
  }
}

export default Founded;
