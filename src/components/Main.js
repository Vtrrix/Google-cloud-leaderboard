import React, { useState } from "react";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function Main() {
  let [theme, setTheme] = useState({
    palette: {
      type: "dark",
      background: {
        default: "#2e003e",
        paper: "#3d1e6d",
      },
    },
  });

  let darkTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar theme={theme} />
      <LeaderBoard />
    </MuiThemeProvider>
  );
}

export default Main;
