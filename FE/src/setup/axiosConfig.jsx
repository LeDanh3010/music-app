import axios from "axios";
import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

const useAxios = () => {
  const { accessToken } = useContext(AuthContext);
  // Set config defaults when creating the instance
  const instance = axios.create({
    baseURL: "http://localhost:8360/user",
  });

  //to set cookie
  instance.defaults.withCredentials = true;

  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response.data;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

export default useAxios;
