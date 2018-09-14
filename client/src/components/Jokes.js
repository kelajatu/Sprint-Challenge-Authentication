import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Jokes extends Component {
  state = {
    jokes: []
  };

  componentDidMount() {
    if (localStorage.getItem("JWT") !== null) {
      const JWT = localStorage.getItem("JWT");
      axios
        .get("http://localhost:3300/api/jokes", {
          headers: { Authorization: JWT }
        })
        .then(response => {
          this.setState({
            jokes: response.data
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.jokes.map((element, index) => {
            return (
              <li key={index}>
                <div>
                  {element.setup}? {element.punchline}:{" "}
                </div>
              </li>
            );
          })}
        </ul>
        {this.state.jokes.length === 0 ? (
          <h1>
            Please <Link to="/login">Login</Link>
          </h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Jokes;
