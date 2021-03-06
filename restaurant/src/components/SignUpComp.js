import React, { Component } from "react";
class Login extends Component {
  render() {
    return (
      <>
        <div className="row Login-us-style">
          <div className="col-md-12">
            <h2>Create Account</h2>
          </div>
        </div>
        <div className="row Create-us-form">
          <div className="col-md-3"></div>
          <div className="col-md-6 Login-us-form-div">
            <form>
              <div className="login-form-title">
                <h3>Create Here!!!</h3>
              </div>
              <hr style={{ padding: "5px 0px"}}/>
              <fieldset>
                <div className="form-group">
                  <label for="User-name">User-Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User-Name"
                  />
                </div>
                
                <div className="form-group">
                  <label for="Password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="Password">Retype-Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype-Password"
                  />
                </div>
                <button type="submit" className="btn Login-submit-button">Sign Up</button>
              </fieldset>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </>
    );
  }
}
export default Login;
