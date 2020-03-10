import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Cards} from "../components/card";
class Restaurant extends Component {
  constructor(props){
    super();
    this.state={
      restoName: "",
      restoAddress: "",
      restoImage: "",
      restoThumb: ""
    }
  }
  render() {
    return (
      <div className="row restaurants">
          <div className="col-md-12 restaurants-names">
              <h2>Our Restaurants</h2>
          </div>
       <div className="col-md-3">
       <Link to="specificResto"> <Cards /></Link>
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-12 resto-button">
            <button className="btn">Explore More</button>
        </div>
      </div>
    );
  }
}

export default Restaurant;
