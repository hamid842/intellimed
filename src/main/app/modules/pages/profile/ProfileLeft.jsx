/**
 * @param {{imageUrl:string}} data
 */

import {memo, useState} from "react";
import {connect} from "react-redux";
import {useSnackbar} from "notistack";
import {Typography, IconButton, Tooltip} from "@mui/material";
import {makeStyles} from "@mui/styles";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";

import colors from "@config/colors";
import UploadImage from "@shared/components/UploadImage";
import axios from "axios";

const useStyles = makeStyles({
    image: {
        width: 150,
        height: 150,
        borderRadius: "50%",
        margin: "20px 0 20px 0",
    },
    noImage: {
        width: 150,
        height: 150,
        borderRadius: "50%",
        margin: "20px 0 20px 0",
        backgroundColor: colors.mediumGrey,
    },
    nameStyle: {
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
    uploadBtn: {
        color: "white",
        border: "none",
        width: 30,
        height: 50,
    },
});

// endpoints
const uploadImageApi = process.env.REACT_APP_UPLOAD_FILE_API;

const ProfileLeft = ({
                         account,
                         setEditProfile,
                         editProfile,
                         showResetPass,
                         setShowResetPass,
                     }) => {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const [loading, setLoading] = useState(false);
    // const [downloadedImage, setDownloadedImage] = useState(null);

    const handleClickEditProfile = () => {
        setShowResetPass(false);
        setEditProfile(!editProfile);
    };

    const handleClickResetPass = () => {
        setEditProfile(false);
        setShowResetPass(!showResetPass);
    };

    const handleChangeProfileImage = async (e) => {
        setLoading(true);
        let data = new FormData();
        data.append("file", e.target.files[0]);
        let config = {
            method: "post",
            url: `${uploadImageApi}?imageSourceType=profile`,
            data,
        };
        await axios(config)
            .then(async (res) => {
                if (res.status === 200 || 201) {
                    enqueueSnackbar(
                        `${e.target.files[0]?.name} file is Uploaded successfully.`,
                        {
                            variant: "success",
                        }
                    );
                    setLoading(false);
                    // setDownloadedImage(await downloadFile(res.data));
                }
            })
            .catch((err) => {
                if (err) {
                    setLoading(false);
                    enqueueSnackbar("Something went wrong!", {variant: "error"});
                }
            });
    };

    const binaryData = [];
    binaryData.push(account?.imageUrl)

    return (
        <>
            {binaryData ? (
                <img
                    src={window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))}
                    alt="ProfileImage"
                    className={classes.image}
                />
            ) : (
                <div className={classes.noImage}/>
            )}
            <Typography className={classes.nameStyle}>
                {account?.firstName + " " + account?.lastName}
            </Typography>
            <Typography className={classes.email}>{account?.email}</Typography>
            <div className={classes.iconsContainer}>
                <IconButton onClick={handleClickEditProfile}>
                    <Tooltip title="Edit Profile">
                        <EditIcon className={classes.icons}/>
                    </Tooltip>
                </IconButton>
                <IconButton onClick={handleClickResetPass}>
                    <Tooltip title="Reset Password">
                        <LockIcon className={classes.icons}/>
                    </Tooltip>
                </IconButton>
                <UploadImage onChange={handleChangeProfileImage} loading={loading}/>
            </div>
        </>
    );
};

const mapStateToProps = ({login}) => ({
    account: login.account,
});

export default connect(mapStateToProps, {})(memo(ProfileLeft));
