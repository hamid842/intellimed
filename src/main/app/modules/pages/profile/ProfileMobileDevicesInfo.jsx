import React from "react";
import Grid from "@material-ui/core/Grid";
import AppTextField from "@components/AppTextField";


const ProfileMobileDevicesInfo = ({
    data,
    onChange,
}) => {
    const {
        deviceInfos: [{ name, os, deviceId, }],
    } = data;
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} lg={12}>
                <AppTextField
                    required
                    name="name"
                    label="Device name"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <AppTextField
                    required
                    name="os"
                    label="OS Type"
                />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
                <AppTextField
                    required
                    name="deviceId"
                    label="Device ID"
                />
            </Grid>
        </Grid>
    );
};

export default ProfileMobileDevicesInfo;
