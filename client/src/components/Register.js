import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefaulto();
    axios
      .post("http://localhost:3300/api/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.inputChange}
          type="text"
          placeholder="username"
          name="username"
          value={this.state.username}
          required
        />
        <input
          onChange={this.inputChange}
          type="password"
          placeholder="password"
          name="password"
          value={this.state.password}
          required
        />
        <input onClick={this.onSubmit} type="submit" value="Submit" />
      </div>
    );
  }
}

export default Register;
