import { memo, useState, useEffect, useRef } from "react";
import { useSnackbar } from "notistack";
import { connect } from "react-redux";
import { makeStyles } from "@mui/styles";
import MaterialTable from "material-table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const useStyles = makeStyles(() => ({
  actions: {
    marginTop: 10,
  },
}));

const getDevicesListApi = process.env.REACT_APP_GET_DEVICES_LIST_API;

const Devices = ({ account }) => {
  const classes = useStyles();
  const tableRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const [devices, setDevices] = useState(null);
  const [columns] = useState([
    { title: "Name", field: "name" },
    { title: "Model", field: "model" },
    { title: "Serial No.", field: "serialNo" },
  ]);

  const deleteDevice = async (id) => {
    await axios
      .delete(`${getDevicesListApi}/${id}`)
      .then((res) => {
        if (res.status === 200 || 201) {
          enqueueSnackbar("Device deleted successfully.", {
            variant: "success",
          });
          tableRef.current.onQueryChange();
        }
      })
      .catch((err) => {
        if (err) {
          enqueueSnackbar("Something went wrong!", { variant: "error" });
        }
      });
  };

  const getDevicesList = async () => {
    await axios(`${getDevicesListApi}/${account?.id}`)
      .then((res) => {
        if (res.status === 200 || 201) {
          setDevices(res.data);
        }
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
    getDevicesList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createTableData = (obj) => {
    const data = [];
    if (obj) {
      data.push(obj);
    }
    return data;
  };
  return (
    <MaterialTable
      classes={{ actions: classes.table }}
      columns={columns}
      options={{
        toolbar: false,
        emptyRowsWhenPaging: false,
        paging: false,
        actionsColumnIndex: -1,
      }}
      icons={{
        Delete: () => <DeleteOutlineIcon color="secondary" />,
        Check: () => <DoneIcon style={{ color: "green" }} />,
        Clear: () => <CloseIcon color="secondary" />,
      }}
      data={createTableData(devices)}
      editable={{
        onRowDelete: (oldData) => deleteDevice(oldData.id),
      }}
    />
  );
};

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(Devices));
