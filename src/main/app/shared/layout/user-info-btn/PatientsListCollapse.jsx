import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import hamid from "@images/hamid.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PatientsListCollapse = ({ patient }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <img src={hamid} alt="Patient" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${patient?.firstName} ${patient?.lastName}`}
          secondary={`Age: ${patient?.age}`}
        />
      </ListItem>
    </List>
  );
};

export default PatientsListCollapse;
