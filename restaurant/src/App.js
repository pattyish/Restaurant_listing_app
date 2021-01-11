import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Restaurant from "./components/pages/Restaurants";
import Contact from "./components/pages/ContactUs";
import Login from "./components/pages/Login";
import SingUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
         <div className="container-fluid">
        <NavBar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/restaurants" exact component={Restaurant} />
        <Route path="/contactUs" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/signUp" exact component={SingUp} />
        </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
