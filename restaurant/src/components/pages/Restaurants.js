import React, { Component } from "react";
import Footer from "../Footer";
import Search from "../RestoSearch";
import Founded from "../FoundedResto";
class Restaurants extends Component {
  render() {
    return (
      <>
        <Search />
        <Founded/>
        <Footer />
      </>
    );
  }
}

export default Restaurants;
