import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Cards} from "../components/card";
class Restaurant extends Component {
  constructor(props){
    this.state={
     restaurants: []
    }
  }
  async componentDidMount(){
    const url = "https://api.github.com/users";
    const response = await fetch(url)
    const data = await response.json();
    this.setState({ restaurants: data});
    console.log("our users are: ", this.state.restaurants)
  }
  render() {
    return (
      <div className="row restaurants">
          <div className="col-md-12 restaurants-names">
              <h2>Our Restaurants</h2>
          </div>
       <div className="col-md-3">
       <Link to="specificResto"> <Cards data={this.state.restaurants}/></Link>
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
