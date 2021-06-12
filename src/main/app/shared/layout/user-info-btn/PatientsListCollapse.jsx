import { memo } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import hamid from "@images/hamid.png";

const PatientsListCollapse = ({ patient }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <img src={hamid || patient.imageUrl} alt="Patient" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={`${patient?.firstName} ${patient?.lastName}`}
        secondary={`Age: ${patient?.age}`}
      />
    </>
  );
};

export default memo(PatientsListCollapse);
