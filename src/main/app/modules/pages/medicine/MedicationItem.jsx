// import React, { useState } from "react";
// import { ReCron, Tab } from "@sbzen/re-cron";
// import "./style.scss";

// const Medication = () => {
//   const [cronValue, setCronValue] = useState("");
//   return (
//     <>
//       <div className="py-2">
//         <b>Cron Value: </b>
//         <code>{cronValue}</code>
//       </div>
//       <ReCron
//         tabs={[Tab.MINUTES, Tab.HOURS, Tab.DAY, Tab.MONTH]}
//         value={cronValue}
//         onChange={(value) => setCronValue(value)}
//       />
//     </>
//   );
// };
// export default Medication;
import React from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Collapse from "@mui/material/Collapse";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardHeader from "@mui/material/CardHeader";
import dayjs from "dayjs";
import clsx from "clsx";

import image from "@images/atorvastatin.jpg";

const useStyles = makeStyles((theme) => ({
  root: {},
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    display: "flex",
    width: 100,
    height: 100,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    color: "dodgerblue",
    fontSize: 18,
    width: 400,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  subheader: {
    fontSize: 15,
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
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={2} sm={2} lg={2}>
          <img src={image} alt="" className={classes.image} />
        </Grid>
        <Grid item xs={10} sm={10} lg={10}>
          <CardHeader
            title={
              <Tooltip title={name}>
                <div className={classes.name}>{name}</div>
              </Tooltip>
            }
            subheader={
              <>
                <Typography variant="caption">{appearance}</Typography>
                <Typography variant="body2">{usageDescription}</Typography>
              </>
            }
            classes={{ subheader: classes.subheader }}
          />
        </Grid>
      </Grid>
      <Divider variant="middle" />
      <div className={classes.details}>
        <CardContent>
          <Typography variant="body2" color="secondary">
            Important Information
          </Typography>
          <Typography variant="subtitle2">{importantInfo}</Typography>
        </CardContent>
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Issue Date: {dayjs(issueDate).format("YYYY-MM-DD HH:mm")}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Refill Time: {dayjs(refillTime).format("YYYY-MM-DD HH:mm")}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
            <Typography variant="body2" color="primary">
              Side Effects:
            </Typography>
            <Typography variant="subtitle2">{sideEffects}</Typography>
          </CardContent>
        </Collapse>
      </div>
    </Card>
  );
};
export default MedicationItem;
