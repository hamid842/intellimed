import axios from "axios";

// endpoints
const downloadImageApi = process.env.REACT_APP_DOWNLOAD_FILE_API;

export const downloadFile = async (fileName) => {
  try {
    const { data } = await axios(`${downloadImageApi}/${fileName}`, {
      responseType: "blob",
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
