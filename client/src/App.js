import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/jokes" render={props => <Jokes {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
