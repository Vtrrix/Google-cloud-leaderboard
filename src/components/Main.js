import React, { useState } from "react";
import NavBar from "./NavBar";
import LeaderBoard from "./LeaderBoard";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function Main() {
  
  let [theme, setTheme] = useState({
    palette: {
      type: 'dark',
      background:{
        default: "#121212",
        paper: "#232323"
      }
    },
  })
  function changeTheme(){
    if(theme.palette.type === 'dark'){
      setTheme({
          palette: {
            type: 'light',
          },
      })
    }
    else{
      setTheme({
          palette: {
            type: 'dark',
            background:{
              default: "#121212",
              paper: "#232323"
            }
          },
      })
    }
  }
  let darkTheme = createMuiTheme(theme)
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar changeTheme={changeTheme}/>
      <LeaderBoard />
    </MuiThemeProvider>
  )
}

export default Main;
