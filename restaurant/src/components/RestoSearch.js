import React, { Component } from "react";
class Search extends Component {
  state = {};
  render() {
    return (
        <div className="row search-area">
          <div className="col-md-3"></div>
          <div className="col-md-6 searchDiv-resto">
            <h1>10 found restaurants</h1>
            <input type="text" name="search" className="searchBox" />
          </div>
          <div className="col-md-3"></div>
        </div>
    );
  }
}

export default Search;
