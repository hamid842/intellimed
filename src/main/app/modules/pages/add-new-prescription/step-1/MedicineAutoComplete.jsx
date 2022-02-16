import {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';


// Endpoints
const getAllMedicinesApi = process.env.REACT_APP_GET_ALL_MEDICINES;

const MedicineAutoComplete = ({onChangeMedicine}) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;
        if (!loading) {
            return undefined;
        }
        (async () => {
            await axios(`${getAllMedicinesApi}/1`)
                .then((res) => {
                    if (active && (res.status === 200 || res.status === 201)) {
                        setOptions([res.data]);
                    }
                })
                .catch((err) => console.log(err));
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            id="asynchronous-demo"
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            onChange={(event, value) => onChangeMedicine('medicine', value)}
            isOptionEqualToValue={(option, value) => option.brandName === value.brandName}
            getOptionLabel={(option) => option.brandName}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    size={'small'}
                    fullWidth
                    label="The name of medicine"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <div>
                                {loading ? <CircularProgress color="inherit" size={20}/> : null}
                                {params.InputProps.endAdornment}
                            </div>
                        ),
                    }}
                />
            )}
        />
    );
}


export default MedicineAutoComplete;
