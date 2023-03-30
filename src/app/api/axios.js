import axios from 'axios';
// const BASE_URL = 'http://localhost:3500';
const BASE_URL = 'https://binpackapi.azurewebsites.net';
// https://binpackapi.azurewebsites.net

export default axios.create({
    baseURL: BASE_URL, 
    headers: { 'Content-Type': 'application/json' },
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, 
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

// const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
// );

// export default axiosInstance;
