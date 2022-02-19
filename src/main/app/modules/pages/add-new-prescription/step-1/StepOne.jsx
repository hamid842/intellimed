/**
 * @param {{brandName:string,strength:string}} data
 */

import {FormControl, Grid, InputLabel, MenuItem, Select} from '@mui/material'

import MedicineAutoComplete from "./MedicineAutoComplete";
import HowTaken from "@pages/add-new-prescription/step-1/HowTaken";

const dosages = ['10 mg', '20 mg']

const StepOne = ({value, onChange, howTaken, setHowTaken}) => {
    return (
        <Grid container spacing={2} sx={{my: 2}}>
            <Grid item xs={12} sm={12} lg={6}>
                <MedicineAutoComplete value={value} onChangeMedicine={onChange}/>
            </Grid>
            {value.medicine.brandName && (<><Grid item xs={12} sm={12} lg={6}>
                <FormControl variant="outlined" fullWidth size="small">
                    <InputLabel id="demo-simple-select-outlined-label">
                        The strength of a dose
                    </InputLabel>
                    <Select
                        required
                        name="medicine"
                        label="The strength of a dose"
                        id="demo-simple-select-outlined-label"
                        value={value.strength || ""}
                        onChange={(e) => onChange('strength', e.target.value)}
                    >
                        {dosages?.map((dose, i) => {
                            return (
                                <MenuItem key={i} value={dose}>
                                    {dose}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <HowTaken howTaken={howTaken} setHowTaken={setHowTaken}/>
                </Grid>
            </>)}
        </Grid>
    )
}

export default StepOne
