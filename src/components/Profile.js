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
    border: "3px solid #ffd700",
    marginTop: "40px",
    marginBottom: "60px",
    animation: "$glow 2s linear infinite",
    color: "#ffd700"
  },
  silver: {
    border: "3px solid #a8a9ad",
    animation: "$glow 2s linear infinite",
    color: "#a8a9ad",
    marginBottom: "60px",
  },
  bronze: {
    border: "3px solid #b08d57",
    animation: "$glow 2s linear infinite",
    color: "#b08d57",
    marginBottom: "60px",
  },
  "@keyframes glow":{
    "0%":{
      boxShadow: "0 0 30px"
    },
    "20%": {
      boxShadow: "0 0 35px"
    },
    "40%":{
      boxShadow: "0 0 37px"
    },
    "60%":{
      boxShadow: "0 0 40px"
    },
    "80%":{
      boxShadow: "0 0 35px"
    },
    "100%":{
      boxShadow: "0 0 30px"
    }
  }
}));

export default function Profile({ student, index }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const colors = ["#4285F4", "#DB4437", "#F4B400", "#0F9D58"]
  return (
    <Card
      key={student.id}
      className={`${classes.root} ${index === 0? classes.golden: null} ${index === 1? classes.silver: null} ${index === 2? classes.bronze: null}`}
      style={index>2?{border: `2px solid ${colors[index%4]}`}:{}}
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
              <img src={tile.imageSrc} alt={tile.title} style={{width:"300px", height: "100%" , margin:"auto"}} key={tile.name}></img>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
