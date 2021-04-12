// import React from "react";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import Divider from "@material-ui/core/Divider";
// import VolumeUpIcon from "@material-ui/icons/VolumeUp";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { makeStyles } from "@material-ui/styles";

// import colors from "@config/colors";

// const useStyles = makeStyles(() => ({
//   container: {
//     width: "100%",
//     height: 350,
//     padding: 20,
//     borderRadius: 10,
//   },
//   divider: {
//     color: "grey",
//     marginTop: 8,
//     marginBottom: 8,
//   },
//   icons: {
//     backgroundColor: colors.mainGrey,
//   },
// }));

// const CurrentMedication = () => {
//   const classes = useStyles();
//   return (
//     <Paper className={classes.container}>
//       <Grid container>
//         <Grid item xs={12} sm={12} lg={12}>
//           <Typography>Current Medication</Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} lg={12}>
//           <Grid container spacing={1}>
//             <Grid item xs={2} sm={2} lg={2}>
//               <img
//                 src={require("@images/atorvastatin.jpg")}
//                 width="50px"
//                 height="50px"
//                 alt="Current Med Pic"
//               />
//             </Grid>
//             <Grid item xs={8} sm={8} lg={8}>
//               <Grid container justify="center">
//                 <Grid item xs={10}>
//                   <Typography color="primary">Atrovastatin 10 MG</Typography>
//                 </Grid>
//                 <Grid item xs={10}>
//                   <Typography>Take 1 tablet by mouth</Typography>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={2} sm={2} lg={2}>
//               <IconButton className={classes.icons}>
//                 <VolumeUpIcon />
//               </IconButton>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Divider variant="middle" className={classes.divider} />
//       <Grid container>
//         <Grid item xs={2}>
//           <AccessTimeIcon />
//         </Grid>
//         <Grid item xs={8}>
//           <Typography>Bedtime[time]</Typography>
//         </Grid>
//         <Grid item xs={2}>
//           <MoreHorizIcon />
//         </Grid>
//       </Grid>
//       <Divider variant="middle" className={classes.divider} />
//       <Grid container>
//         <Grid item>
//           <Typography color="secondary">Important information</Typography>
//         </Grid>
//         <Grid item>
//           <Typography>-Avoid eating or drinking grapefruit</Typography>
//         </Grid>
//         <Grid item>
//           <Typography>
//             -This medicine maybe taken with or without food
//           </Typography>
//         </Grid>
//       </Grid>
//       <Divider variant="middle" className={classes.divider} />
//       <Grid container>
//         <Grid item xs={12} sm={12} lg={12}>
//           {" "}
//           <Typography color="secondary">Rifill status</Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} lg={12}>
//           {" "}
//           <Typography>QTY:43 out of 60</Typography>
//         </Grid>
//         <Grid item xs={12} sm={12} lg={12}>
//           {" "}
//           <Typography>refill by 03/10/2020</Typography>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default CurrentMedication;
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  navButtons: {
    backgroundColor: "#b5b5b5",
    opacity: 0.5,
  },
  container: {
    height: 300,
  },
}));

const CurrentMedication = () => {
  const classes = useStyles();
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];
  return (
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      autoPlay={false}
      navButtonsProps={{ className: classes.navButtons }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} classes={classes} />
      ))}
    </Carousel>
  );
};

function Item({ item, classes }) {
  return (
    <>
      <Paper className={classes.container}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
      <Paper className="mt-2">
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <Button className="CheckButton">Check it out!</Button>
      </Paper>
    </>
  );
}

export default CurrentMedication;
