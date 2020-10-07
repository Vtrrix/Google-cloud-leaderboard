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
import Logo from "../assets/logo.png";
import { grey } from '@material-ui/core/colors';

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
        <AppBar style={{ background: "#fafafa" }}>
          <Toolbar>
            <Typography variant="h6">
              <img src={Logo} className="logo" alt="Google"></img>
            </Typography>
            <IconButton style={{marginLeft: "auto"}} onClick={props.changeTheme}>
              <Brightness4RoundedIcon style={{color: grey[900]}} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
