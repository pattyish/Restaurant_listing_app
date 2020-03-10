import React, { Component } from "react";
import Restaurants from "../AllRestaurant";
import HowItWork from "../GuideComponent";
import RestaurantApp from "../RestaurantApp";
import Footer from "../Footer";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row home">
          <div className="col-md-3"></div>
          <div className="col-md-6 searchDiv">
            <h1>Find nearby restaurants</h1>
            <input type="text" name="search" className="searchBox" />
          </div>
          <div className="col-md-3"></div>
        </div>
        <Restaurants />
        <HowItWork />
        <RestaurantApp />
        <Footer />
        </>
    );
  }
}

export default Home;
