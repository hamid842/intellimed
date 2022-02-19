import {useState, useEffect} from "react";
import {
    Grid,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import {ThemeProvider, makeStyles} from "@mui/styles";
import axios from "axios";

import {formLabelsTheme} from "@shared/constants/formLabelsTheme";
import AppDatePicker from "@shared/components/AppDatePicker";
import AppTextField from "@shared/components/AppTextField";

const useStyles = makeStyles({
    rows: {
        marginTop: 15,
    },
});

const hardCodePharmacies = [
    {
        id: 1,
        name: 'CLV',
        phoneNumber: +16844989849,
        address: 'USA'
    }
]

// Endpoints
const getAllPharmaciesApi = process.env.REACT_APP_GET_ALL_PHARMACIES;

const MedicineInformation = ({value, onChange, onChangeDate}) => {
    const classes = useStyles();

    const [pharmacies, setPharmacies] = useState([]);

    const getAllMedicines = async () => {
        await axios(getAllPharmaciesApi)
            .then((res) => {
                if (res.status === 200 || 201) {
                    setPharmacies(res.data);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAllMedicines(1).then(() => {
        });
    }, []);
    return (
        <ThemeProvider theme={formLabelsTheme}>
            <form>
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
                        <FormControl variant="outlined" fullWidth size="small">
                            <InputLabel id="demo-simple-select-outlined-label">
                                Select Pharmacy
                            </InputLabel>
                            <Select
                                required
                                name="pharmacy"
                                label="Select Pharmacy"
                                id="demo-simple-select-outlined-label"
                                value={value.pharmacy.name}
                                onChange={(e) => onChange('pharmacy', e.target.value)}
                            >
                                {pharmacies.length > 0 ? pharmacies?.map((pharmacy, i) => {
                                    return (
                                        <MenuItem key={i} value={pharmacy}>
                                            {pharmacy.name}
                                        </MenuItem>
                                    );
                                }) : hardCodePharmacies.map((item, i) => {
                                    return (
                                        <MenuItem key={i} value={item}>
                                            {item.name}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
                        <AppDatePicker
                            label="Refill"
                            name="refillTime"
                            value={value.refillTime}
                            onChange={(e) => onChangeDate(e, "refillTime")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4} lg={4} className={classes.rows}>
                        <AppTextField
                            type="number"
                            label="Quantity"
                            name="qty"
                            value={value.qty}
                            onChange={(e) => onChange('qty', e.target.value)}
                        />
                    </Grid>
                </Grid>
            </form>
        </ThemeProvider>
    );
};

export default MedicineInformation;