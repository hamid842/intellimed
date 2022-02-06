import {Button, Divider, Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddModeratorIcon from '@mui/icons-material/AddModerator';

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


const AddingButtons = ({loading, onChange, onClick}) => {
    const classes = useStyles()
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
                    onChange={onChange}
                />
                <label htmlFor="contained-button-file">
                    <SelectionButton component={'span'} startIcon={
                        loading ? (
                            <CircularProgress size={15} color="inherit"/>
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
