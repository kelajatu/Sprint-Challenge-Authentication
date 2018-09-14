import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  onSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:3300/api/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        localStorage.setItem("JWT", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.inputChange}
          placeholder="username"
          name="username"
          value={this.state.username}
          required
        />
        <input
          type="password"
          onChange={this.inputChange}
          placeholder="password"
          name="password"
          value={this.state.password}
          required
        />
        <input onClick={this.onSubmit} type="submit" calue="submit" />
      </div>
    );
  }
}

export default Login;
