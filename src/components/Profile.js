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
    marginBottom: "25px",
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
  golden: {
    border: "2px solid #f7cc35",
    marginTop: "25px"
  },
  silver: {
    border: "2px solid #a8a9ad"
  },
  bronze: {
    border: "2px solid #b08d57"
  },
}));

export default function Profile({ student, index }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card
      key={student.id}
      className={`${classes.root} ${index === 0? classes.golden: null} ${index === 1? classes.silver: null} ${index === 2? classes.bronze: null}`}
    >
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          // justifyContent="space-between"
        >
          <div style={{flex: "1", display: "flex", alignItems: "center"}} >
            <Typography variant="body2" color="textSecondary" component="p" style={{marginRight: "20px"}} >
              {`${index + 1}.`}
            </Typography>
            <a
              href={student.qwiklabs_id}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#212121" }}
            >
              <Box display="flex">
                <Avatar aria-label={student.name} className={classes.avatar} src={student.dp}/>
                <Box display="flex" alignItems="center" mx={3}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {student.name}
                  </Typography>
                </Box>
              </Box>
            </a>
          </div>

          <Box display="flex">
            <Avatar
              aria-label={student.name}
              style={{
                color: "#fafafa",
                background: "#efefef",
                marginRight: "10px",
                border: "1px solid #cdcdcd"
              }}
              className={classes.avatar}
            >
              <Typography style={{color: "black"}}>
                {student.quests_status}
              </Typography>
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
          <Grid style={{display: "flex", flexWrap: "wrap" }}>
            {student.quests.map((tile) => (
              <img src={tile.img} alt={tile.name} style={{width:"300px", height: "100%" , margin:"auto"}} key={tile.name}></img>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
