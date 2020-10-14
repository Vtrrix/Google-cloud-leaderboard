import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  IconButton
} from "@material-ui/core";
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

export default function NavBar(props) {

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={props.theme.palette.type === "dark"? { background: "#121212" }: {background: "#fff"}}>
          <Toolbar>
            <Typography variant="h6" style={{color: "#344334", fontWeight: "bold", fontSize: "30px", display: "flex"}}>
              <p style={{margin: "0px", color: "#4285F4"}}>30</p>&nbsp;
              <p style={{margin: "0px", color: "#DB4437"}}>Days</p>&nbsp;
              <p style={{margin: "0px", color: "#F4B400"}}>of</p>&nbsp;
              <p style={{margin: "0px", color: "#0F9D58"}}>Google Cloud</p>
            </Typography>
            <IconButton style={{marginLeft: "auto"}} onClick={props.changeTheme}>
              <Brightness4RoundedIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
