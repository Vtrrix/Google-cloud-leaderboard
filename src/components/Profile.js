import React from "react";
import { blue } from "@material-ui/core/colors";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  IconButton,
  Box,
  Avatar,
  Grid,
  CardContent,
  Typography,
  Card,
  Collapse,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85vw",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function Profile({ student }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      className={classes.root}
      key={student.id}
      style={{ minWidth: "280px", margin: "25px" }}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <a
            href={student.qwiklabs_id}
            target="_blank"
            style={{ textDecoration: "none", color: "#212121" }}
          >
            <Box display="flex">
              <Avatar aria-label={student.name} className={classes.avatar}>
                <img src={student.dp} alt="G" />
              </Avatar>
              <Box display="flex" display="flex" alignItems="center" mx={3}>
                <Typography variant="body2" color="textSecondary" component="p">
                  {student.name}
                </Typography>
              </Box>
            </Box>
          </a>

          <Box display="flex">
            <Avatar
              aria-label={student.name}
              style={{
                color: "#fafafa",
                background: "#bdbdbd",
                marginRight: "10px",
              }}
              className={classes.avatar}
            >
              {student.quests_status}
            </Avatar>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container className={classes.root} spacing={4}>
            {student.quests.map((ele) => {
              return (
                <Grid item xs={3}>
                  <img src={ele.img} style={{ width: "80%" }}></img>
                </Grid>
              );
            })}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
