import * as axios from "axios";
//import settings from '../../config/settings';

const instance = axios.create();
instance.defaults.timeout = 100000;

instance.defaults.headers = {
  ContentType: "application/json"
  // Authorization: `Bearer ${YELP_API_KEY}`,
};

instance.interceptors.response.use(
  response => {
    console.log("Response from interceptors");
    return response;
  },
  error => {
    // Do something with response error
    console.log("interceptors.response", error);
    if (error && error.code && error.code === "ECONNABORTED") {
      return Promise.reject("Timeout exceeded");
    }
    // if (!error.status) {
    //     return Promise.reject('Network Error');
    // }

    if (error && error.response && error.response.status === 401) {
      console.log("unauthorized, logging out ...");
      //auth.logout();
      ///router.replace('/auth/login');
    }
    return Promise.reject(error.response);
  }
);

export { instance as default };
