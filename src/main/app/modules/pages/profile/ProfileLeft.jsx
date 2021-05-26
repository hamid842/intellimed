import { Typography, IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";

import colors from "@config/colors";
import hamid from "@images/hamid.png";

const useStyles = makeStyles(() => ({
  image: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    margin: "20px 0 20px 0",
  },
  name: {
    fontSize: 20,
    fontWeight: 600,
    margin: "20px 0 20px 0",
  },
  email: {
    fontSize: 15,
    color: colors.mainGrey,
    letterSpacing: 1,
  },
  iconsContainer: {
    margin: "20px 0 20px 0",
  },
  icons: {
    color: colors.white,
  },
}));

const ProfileLeft = ({
  accountInfo,
  setEditProfile,
  editProfile,
  showResetPass,
  setShowResetPass,
}) => {
  const classes = useStyles();

  const handleClickEditProfile = () => {
    setShowResetPass(false);
    setEditProfile(!editProfile);
  };

  const handleClickResetPass = () => {
    setEditProfile(false);
    setShowResetPass(!showResetPass);
  };

  return (
    <>
      <img src={hamid} alt="ProfileImage" className={classes.image} />
      <Typography className={classes.name}>
        {accountInfo?.firstName + " " + accountInfo?.lastName}
      </Typography>
      <Typography className={classes.email}>{accountInfo?.email}</Typography>
      <div className={classes.iconsContainer}>
        <IconButton onClick={handleClickEditProfile}>
          <Tooltip title="Edit Profile">
            <EditIcon className={classes.icons} />
          </Tooltip>
        </IconButton>
        <IconButton onClick={handleClickResetPass}>
          <Tooltip title="Reset Password">
            <LockIcon className={classes.icons} />
          </Tooltip>
        </IconButton>
      </div>
    </>
  );
};

export default ProfileLeft;
