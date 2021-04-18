import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Dayjs from "dayjs";

import image from "@images/atorvastatin.jpg";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 350,
  },
  name: {
    fontSize: 18,
    width: 200,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  subheader: {
    fontSize: 15,
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
    backgroundColor: red[500],
  },
}));

const MedicationItem = ({ medicine }) => {
  const {
    name,
    usageDescription,
    importantInfo,
    appearance,
    issueDate,
    refillTime,
    sideEffects,
  } = medicine;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return medicine ? (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Tooltip title={name}>
            <div className={classes.name}>{name}</div>
          </Tooltip>
        }
        subheader={appearance}
        classes={{ subheader: classes.subheader }}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Issue Date: {Dayjs(issueDate).format("YYYY-MM-DD HH:mm")}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Refill Time: {Dayjs(refillTime).format("YYYY-MM-DD HH:mm")}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="secondary">
            Usage Description:
          </Typography>
          <Typography paragraph>{usageDescription}</Typography>
          <Typography paragraph color="secondary">
            Important Information:
          </Typography>
          <Typography paragraph>{importantInfo}</Typography>
          <Typography paragraph color="secondary">
            Side Effects:
          </Typography>
          <Typography paragraph>{sideEffects}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  ) : (
    <CircularProgress />
  );
};

export default MedicationItem;
