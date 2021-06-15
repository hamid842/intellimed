import axios from "axios";

// Endpoints
const getCurrentUserInfoApi = process.env.REACT_APP_GET_USER_INFOS_API;

export const getUserInfo = async (id) => {
  try {
    const { data } = await axios(`${getCurrentUserInfoApi}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
