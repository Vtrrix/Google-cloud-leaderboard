import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Profile from "./Profile";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
    };
  }
  componentDidMount() {
    fetch("https://qwiklabs-ranking-dsccu.herokuapp.com/api")
      .then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }

        response.json().then((data) => {
          this.setState({
            values: Array.from(data),
          });
          // console.log(this.state.values)
        });
      })
      .catch((err) => {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <Container>
        {this.state.values.map((student, idx) => {
          return <Profile student={student} key={student.id} index={idx}/>;
        })}
      </Container>
    );
  }
}

export default LeaderBoard;
