import React, { Component } from "react";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <NavBar />
        <LeaderBoard />
      </>
    );
  }
}

export default Main;
