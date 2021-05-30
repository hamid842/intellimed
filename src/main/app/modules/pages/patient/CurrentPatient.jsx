import { memo } from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import hamid from "@images/hamid.png";
import AppButton from "@components/AppButton";
import colors from "@config/colors";

const useStyles = makeStyles(() => ({
  image: {
    borderRadius: "50%",
  },
}));

const CurrentPatient = ({ patientInfo, editMode, setEditMode }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        {/* Left Side */}
        <Grid item xs={12} sm={12} lg={3} className="text-center">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12}>
              <img
                src={hamid || patientInfo?.patientImageUrl}
                alt="Pic"
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <AppButton
                label="Edit"
                color={colors.mainBlue}
                variant="outlined"
                icon={<EditIcon />}
                width={95}
                onClick={() => setEditMode(!editMode)}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <AppButton
                label="Delete"
                color="red"
                variant="outlined"
                icon={<DeleteOutlineIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* Center */}
        <Grid item xs={12} sm={12} lg={6}>
          <Grid container>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">First Name:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.firstName}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Last Name:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.lastName}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Birth Date:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.birthDate}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Email:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.email}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">ID No.:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.idNo}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Marital Status:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">
                {patientInfo?.maritalStatus}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Phone Number:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">
                {patientInfo?.phoneNumber1}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Mobile Number:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">
                {patientInfo?.phoneNumber2}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Relationship:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">
                {patientInfo?.relationshipWithUser}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Address:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.address}</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} sm={12} lg={3}>
          <Grid container>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Age:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.age}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Height:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.height}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Weight:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.weight}</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="subtitle2">Blood Type:</Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6}>
              <Typography variant="body2">{patientInfo?.bloodType}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default memo(CurrentPatient);
