import axios from "./axios";

const URL = "http://172.18.130.106:3000";

export function login (username, password){
  console.log(`${URL} /admin/login`)
  return (
  axios.post(`${URL}/user/login`, { username, password }))
}

export function getDatas (){
  
    
    axios.defaults.headers = {
      ContentType: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
    return axios.post(`${URL} /admin/login`)
  
}
