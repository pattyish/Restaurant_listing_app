import React from "react";
import Food from "../images/food.png";
import Rest_log from "../images/restaurant.png";
export const Cards = props => {
  return (
    <div className="card">
      <img src={Food} alt="Restaurant" className="card-img-top"/>
      <div className="card-body resto-card-body">
          <div className="resto-log">
          <img src={Rest_log} alt="Restaurant" className="card-img-bot"/>
          </div>
          <div className="rest-address">
            <h6>KUGASIMA CAFFE</h6>
            <p>$$-Kimihurura</p>
        </div>
      </div>
    </div>
  );
};
