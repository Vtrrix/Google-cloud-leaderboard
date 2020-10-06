import React from "react";
import { blue } from "@material-ui/core/colors";
import {
  List,
  ListItem,
  Avatar,
  CardContent,
  Typography,
  CardHeader,
  Card,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function Profile({ student }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} key={student.id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img src={student.dp} alt="G" />
          </Avatar>
        }
        title={student.name}
        subheader={student.quests_status}
      />
      <hr style={{ width: "85%", opacity: "0.2" }}></hr>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {student.qwiklabs_id}
        </Typography>
        <List style={{ height: "200px", overflowY: "auto" }}>
          {student.quests.map((ele) => {
            return <ListItem>{ele}</ListItem>;
          })}
        </List>
      </CardContent>
    </Card>
  );
}
