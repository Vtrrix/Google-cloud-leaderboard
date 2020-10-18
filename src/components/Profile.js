import React from "react";
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
}));

export default function Profile({ student, index }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card key={student.id} className={classes.root}>
      <CardContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          // justifyContent="space-between"
        >
          <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginRight: "20px" }}
            >
              {`${index + 1}.`}
            </Typography>
            <a
              href={student.qwiklabs_id}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#212121" }}
            >
              <Box display="flex">
                <Avatar
                  aria-label={student.name}
                  className={classes.avatar}
                  src={student.dp}
                />
                <Box display="flex" alignItems="center" mx={3}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {student.name}
                  </Typography>
                </Box>
              </Box>
            </a>
          </div>

          <Box display="flex">
            <Avatar
              aria-label={student.name}
              className={classes.avatar}
              // style={{ color: "black", background: "white" }}
            >
              <Typography>{student.quests_status}</Typography>
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
          <Grid style={{ display: "flex", flexWrap: "wrap" }}>
            {student.quests.map((tile) => (
              <img
                src={tile.imageSrc}
                alt={tile.title}
                style={{ width: "300px", height: "100%", margin: "auto" }}
                key={tile.name}
              ></img>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
