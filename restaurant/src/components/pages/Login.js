import React, { Component } from "react";
import Footer from "../Footer";
import Login from "../Login";
class LoginComponent extends Component {
  render() {
    return (
      <>
        <Login />
        <Footer />
      </>
    );
  }
}

export default LoginComponent;
