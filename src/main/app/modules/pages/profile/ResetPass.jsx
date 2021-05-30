import { memo, useState } from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

import AppButton from "@components/AppButton";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import PasswordField from "@shared/components/PasswordField";
import AppTextField from "@shared/components/AppTextField";
import Title from "@shared/components/Title";

// Endpoints
const changePasswordApi = process.env.REACT_APP_CHANGE_PASSWORD_API;

const ResetPass = ({ setShowResetPass }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);
    await axios
      .post(changePasswordApi, { currentPassword, newPassword })
      .then((res) => {
        if (res.status === 200 || 201) {
          enqueueSnackbar("Password is updated successfully.", {
            variant: "success",
          });
          setCurrentPassword("");
          setNewPassword("");
          setLoading(false);
        }
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          enqueueSnackbar("Something went wrong!", {
            variant: "error",
          });
        }
      });
  };

  return (
    <>
      <ThemeProvider theme={formLabelsTheme}>
        <form onSubmit={handleChangePassword}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} lg={12} className="mt-1">
              <Title title="Change Password" />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} className="mt-1">
              <PasswordField
                label="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12} className="mt-1">
              <AppTextField
                type="password"
                label="New Password"
                error={currentPassword === newPassword ? false : true}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={6} className="text-center">
              <AppButton
                label="Cancel"
                variant="outlined"
                color="red"
                icon={<CloseIcon />}
                onClick={() => setShowResetPass(false)}
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={6} className="text-center">
              <AppButton
                type="submit"
                label="Change"
                variant="outlined"
                color="green"
                disabled={currentPassword === newPassword ? false : true}
                icon={
                  loading ? (
                    <CircularProgress size="15px" color="inherit" />
                  ) : (
                    <CheckIcon />
                  )
                }
                width={90}
              />
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </>
  );
};

export default memo(ResetPass);
