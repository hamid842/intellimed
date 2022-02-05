import { useState, useEffect } from "react";
import {
  Grid,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
import axios from "axios";

import AppSelectField from "@components/AppSelectField";
import AppTextField from "@components/AppTextField";
import { formLabelsTheme } from "@shared/constants/formLabelsTheme";
import Usage from "./Usage";

const options = [
  { label: "OTHER", value: "OTHER" },
  { label: "ORAL", value: "ORAL" },
  { label: "INJECTION", value: "INJECTION" },
];

const useStyles = makeStyles(() => ({
  rows: {
    marginTop: 15,
  },
  uploadBtn: {
    width: "310px !important",
    height: 45,
    marginBottom: 3,
    textTransform: "capitalize",
  },
}));

// Endpoints
const getAllMedicinesApi = process.env.REACT_APP_GET_ALL_MEDICINES;

const MedicineInformation = ({ value, onChange, onChangeCron }) => {
  const classes = useStyles();
  const [medicines, setMedicines] = useState([]);

  const getAllMedicines = async (id) => {
    await axios(`${getAllMedicinesApi}/${id}`)
      .then((res) => {
        if (res.status === 200 || 201) {
          setMedicines([res.data]);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllMedicines(1);
  }, []);

  return (
    <ThemeProvider theme={formLabelsTheme}>
      <form>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <FormControl variant="outlined" fullWidth size="small">
              <InputLabel id="demo-simple-select-outlined-label">
                Select Medicine
              </InputLabel>
              <Select
                required
                name="medicine"
                label="Select Medicine"
                id="demo-simple-select-outlined-label"
                value={value.medicine.brandName}
                onChange={onChange}
              >
                {medicines?.map((medicine, i) => {
                  return (
                    <MenuItem key={i} value={medicine}>
                      {medicine.brandName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <AppSelectField
              label="Type"
              name="medicType"
              options={options}
              value={value.medicType}
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <AppTextField
              label="Usage Description"
              name="usageDescription"
              value={value.usageDescription}
              onChange={onChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} lg={4} className={classes.rows}>
            <Usage value={value} setValue={onChangeCron} />
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default MedicineInformation;
