import React, { Component } from "react";
import { Box, Container } from "@material-ui/core";
import Profile from "./Profile";

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {},
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
        });
      })
      .catch((err) => {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <Container>
        <Box my={2}>
          {this.state.values.map((ele) => {
            return <Profile />;
          })}
        </Box>
      </Container>
    );
  }
}

export default LeaderBoard;
