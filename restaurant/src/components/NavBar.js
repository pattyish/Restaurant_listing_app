import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/PODZO.png";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row navbar-row">
          <div className="col-md-6 logo">
            <NavLink to="/">
              {" "}
              <img src={Logo} alt="Restaurant Log" className="Log-podzo" />
            </NavLink>
          </div>
          <div className=" col-md-6 menu">
            <nav className="">
              <ul>
                <li>
                  <NavLink to="/" activeStyle={{ color: "red" }}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/restaurants">Restraunts</NavLink>
                </li>
                <li>
                  <NavLink to="/contactUs/">Contact</NavLink>
                </li>
                <li>|</li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>

                <li>
                  <NavLink to="/signUp" className="sign-up-style">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
