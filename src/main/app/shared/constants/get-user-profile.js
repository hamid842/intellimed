import axios from "axios";

// Endpoints
const getCurrentUserInfo = process.env.REACT_APP_GET_PROFILE_INFOS;

export const getCurrentUserProfile = async () => {
    let instance = axios.create();
    delete instance.defaults.headers.common["Authorization"];
    try {
        const { data } = await instance(getCurrentUserInfo);
        return data;
    } catch (error) {
        console.log(error);
    }
};