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
    console.log("Response from interceptors",response);
    return response;
  },
  error => {
    if (!error.status) {
        return Promise.reject({msg:'Network Error',done:false});
    }
    return Promise.reject(error.response);
  }
);

export { instance as default };
