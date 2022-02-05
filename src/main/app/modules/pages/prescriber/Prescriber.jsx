import {Grid} from '@mui/material'

import PrescriberItem  from "./PrescriberItem"; 
import AddNewPrescriberItem from "./AddNewPrescriberItem" ; 


const Prescriber = () => {

  return (
    <div className="py-2">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} lg={6}>
          {<PrescriberItem />}
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          {" "}
          <AddNewPrescriberItem />
        </Grid>
      </Grid>
    </div>
  );
};
export default Prescriber;
