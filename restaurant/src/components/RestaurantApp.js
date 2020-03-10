import React, { Component } from "react";
class RestaurantApp extends Component {
  render() {
    return (
      <div className="row app-part-app">
        <div className="col-md-4"></div>
        <div className="col-md-4 guide-title-app">
          <h3>Get the app</h3>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4 app-content">
          <p>
            Lorem ipsum dolor sit amet, consectetuer <br />
            adipising elit, sed do eius.
          </p>
          <button className="btn btn-lg" id="app_button">Submit</button>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

export default RestaurantApp;
