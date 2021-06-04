import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import dayjs from "dayjs";

import image from "@images/atorvastatin.jpg";
import { getSideEffects } from "@shared/constants/get-sideEffects";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
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

const PrescriptionDetail = ({ item, id }) => {
  const classes = useStyles();

  const [sideEffects, setSideEffects] = useState();

  useEffect(() => {
    const fetchSideEffects = async () => {
      setSideEffects(await getSideEffects(id));
    };
    fetchSideEffects();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={2} className="mt-2">
      <Grid xs={12} sm={4} lg={4}>
        <Card className={classes.root}>
          <CardHeader
            title={
              <Tooltip title={item?.prescriptionCode}>
                <div className={classes.name}>{item?.prescriptionCode}</div>
              </Tooltip>
            }
            subheader={item?.usageDescription}
            classes={{ subheader: classes.subheader }}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={item?.prescriptionCode}
          />
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="1"
            >
              Issue Date: {dayjs(item?.issueDate).format("YYYY-MM-DD HH:mm")}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              id="2"
            >
              Refill Time: {dayjs(item?.refillTime).format("YYYY-MM-DD HH:mm")}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid xs={12} sm={4} lg={4}>
        <Typography color="secondary" variant="subtitle2">
          Important Information
        </Typography>
        <Typography variant="body2">{item?.importantInfo}</Typography>
      </Grid>
      <Grid xs={12} sm={4} lg={4}>
        <Typography color="secondary" variant="subtitle2">
          Side Effects
        </Typography>
        <Typography variant="body2">{sideEffects?.sideEffect}</Typography>
      </Grid>
    </Grid>
  );
};

export default PrescriptionDetail;
