import axios from "axios";

const AxiosInterceptors = () => {
    // set token to headers
    const token = localStorage.getItem("token");
    if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }

    // request
    axios.interceptors.request.use((config) => {
        //loadProgressBar();
        return config;
    });

    // response
    axios.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if (error?.response?.status === 401) {
            } else if (error.response.status !== 401) {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            } else {
                return false;
            }
        }
    );
};

export default AxiosInterceptors;
