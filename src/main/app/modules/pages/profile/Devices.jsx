import { memo, useState, useEffect } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import axios from "axios";

const getDevicesListApi = process.env.REACT_APP_GET_DEVICES_LIST_API;

const Devices = ({ account }) => {
  const [devices, setDevices] = useState();
  const [columns] = useState([
    { title: "Name", field: "name" },
    { title: "Model", field: "model" },
    { title: "Serial No.", field: "serialNo" },
  ]);

  const getDevicesList = async () => {
    await axios(`${getDevicesListApi}/${account?.id}`)
      .then((res) => {
        if (res.status === 200 || 201) {
          setDevices(res.data);
        }
      })
      .catch((err) => {
        if (err) {
          return;
        }
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
      columns={columns}
      options={{
        toolbar: false,
        emptyRowsWhenPaging: false,
        paging: false,
        actionsColumnIndex: -1,
      }}
      icons={{
        Delete: () => <DeleteOutlineIcon color="secondary" />,
      }}
      actions={[
        (rowData) => ({
          icon: "delete_outline",
          tooltip: "Delete Device",
        }),
      ]}
      data={createTableData(devices)}
    />
  );
};

const mapStateToProps = ({ login }) => ({
  account: login.account,
});

export default connect(mapStateToProps, {})(memo(Devices));
