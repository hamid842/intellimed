import {Grid, Typography, ToggleButton, ToggleButtonGroup} from '@mui/material';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    btn: {
        width: 160,
        height: 30,
        textTransform: 'capitalize'
    }
})

const HowTaken = ({howTaken, setHowTaken}) => {
    const classes = useStyles()

    const handleChange = (event, newAlignment) => {
        setHowTaken(newAlignment)
    };

    return (
        <Grid container spacing={1} alignItems={'center'}>
            <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                <Typography>How are doses taken?</Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={12} sx={{textAlign: 'center'}}>
                <ToggleButtonGroup
                    color="primary"
                    size={'small'}
                    value={howTaken}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton className={classes.btn} value="As Needed">As Needed</ToggleButton>
                    <ToggleButton className={classes.btn} value="Scheduled Does">Scheduled Does</ToggleButton>

                </ToggleButtonGroup>
            </Grid>
        </Grid>
    )
}
export default HowTaken;
