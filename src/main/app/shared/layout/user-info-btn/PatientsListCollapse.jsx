import { memo } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const PatientsListCollapse = ({ patient }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar>
          <img src={patient.imageUrl} alt="Patient" />
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
