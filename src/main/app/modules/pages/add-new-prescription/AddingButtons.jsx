import {useState} from 'react';
import {Button, Divider, Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";
import {useSnackbar} from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import axios from "axios";

const useStyles = makeStyles({
    uploadInput: {
        width: "0 !important",
        display: "none",
        height: 0,
    },
    btnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

})

const SelectionButton = styled(Button)({
    textTransform: 'capitalize'
})

// Endpoints
const uploadImageApi = process.env.REACT_APP_UPLOAD_FILE_API;


const AddingButtons = ({ onClick}) => {
    const classes = useStyles()
    const {enqueueSnackbar} = useSnackbar()
    const [imageLoading, setImageLoading] = useState(false);

    const handleChangePrescriptionImage = async (e) => {
        setImageLoading(true);
        let data = new FormData();
        data.append("file", e.target.files[0]);
        let config = {
            method: "post",
            url: `${uploadImageApi}?imageSourceType=prescription`,
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
                    setImageLoading(false);
                    // setDownloadedImage(await downloadFile(res.data));
                }
            })
            .catch((err) => {
                if (err) {
                    setImageLoading(false);
                    enqueueSnackbar("Something went wrong!", { variant: "error" });
                }
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <div className={classes.btnContainer}>
                <SelectionButton onClick={onClick} startIcon={<AddModeratorIcon/>}>
                    Add Prescription Manually</SelectionButton>
                <Typography variant={'caption'}>Need to complete three steps</Typography>
            </div>
            <Divider orientation={'vertical'} variant={'middle'} flexItem/>
            <div className={classes.btnContainer}>
                <input
                    accept="image/*"
                    className={classes.uploadInput}
                    id="contained-button-file"
                    type="file"
                    onChange={handleChangePrescriptionImage}
                />
                <label htmlFor="contained-button-file">
                    <SelectionButton component={'span'} startIcon={
                        imageLoading ? (
                            <CircularProgress size={15} color="primary"/>
                        ) : (
                            <CloudUploadIcon/>
                        )
                    }>Upload Prescription Image</SelectionButton>
                </label>
                <Typography variant={'caption'}>We will get info automatically</Typography>
            </div>
        </Box>
    );
}

export default AddingButtons;
