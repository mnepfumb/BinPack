import axios from 'axios';

export default axios.create({
    
    baseURL: process.env.REACT_APP_API_BASE_URL, 
    headers: { 'Content-Type': 'application/json' },
});

export const axiosPrivate = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL, 
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

// const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
// );

// export default axiosInstance;
