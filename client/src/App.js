import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Jokes from "./components/Jokes";
import Register from "./components/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/jokes" render={props => <Jokes {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
