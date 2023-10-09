import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (
//       error.response &&
//       (error.response.status === 403 || error.response.status === 401)
//     ) {
//       // Token expired or invalid, redirect to login page
//       window.location.href = "/login";
//       // localStorage.removeItem("username");
//       localStorage.removeItem("token");
//     }
//     return Promise.reject(error);
//   }
// );
