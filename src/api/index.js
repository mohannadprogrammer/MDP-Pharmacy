import axios from "./axios";

const URL = "http://172.18.130.106:3000";

export function login(username, password) {
  console.log(`${URL} /admin/login`)
  return (
    axios.post(`${URL}/user/login`, { username, password }))
}

export function getDatas(type) {

  console.log(localStorage.getItem('token'))
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/getAll`, { type })

}
//
export function addItem(item) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/item/additem`, item)

}

//
export function addUser(user) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/user/register`, user)

}
export function addStore(store) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/addstore`, store)

}

export function addSupplier(supplier) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/supplier/addsupplier`, supplier)

}
//get   item for get items that in spacific store and with bar code 
export function getItemForSales(search) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/getItem`, search)

}

//HEAR  don sale invoice in 

export function sale(saled) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/invoice/add`, saled)
}


//get stock details 
export function getStock(storeid) {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/getDetail`, { storeid })
}

export function getAllInvoic() {
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/getAll`, { type: "invoice" })
}
