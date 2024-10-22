import axios from "./axios";

const URL = "http://172.18.130.104:3000";

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
export function updateItem (item){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/item/updateitem`, item)
}
export function deleteItem(id){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/item/deleteitem`, id)
}
//
export function addUser(user) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/user/register`, user)

}
export function updateUser (user){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/user/update`, user)
}
export function disactiveUser(user){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/user/changUserStatus`, user)
}
//Store api 
export function addStore(store) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/addstore`, store)

}
export function updateStore (store){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/update`, store)
}
export function deleteStore (storeid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/delete`, storeid)
}
//permission api 
export function addPermission(permission) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/permission/create`, permission)

}
export function updatePermission (permission){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/permission/update`, permission)
}
export function deletePermission (permissionid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/permission/delete`, permissionid)
}

//units api 
export function addUnit(unit) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/item/addunit`, unit)

}
export function updateUnit (store){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/item/updateunit`, store)
}
export function deleteUnit (storeid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/store/delete`, storeid)
}
// supplier api process 
export function addSupplier(supplier) {

  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/supplier/addsupplier`, supplier)

}
export function updateSupplier (supplier){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/supplier/update`, supplier)
}
export function deleteSupplier (supplier){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/supplier/deletesupplier`, supplier)
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

export function addInvoice(saled) {
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
export function getInvoiceDetails(invoiceid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/invoice/invoiceDetails`, { invoiceid })
}

export function rejectInvoice(invoiceid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/invoice/reject`, {invoiceid})
}

//reports 

export function stockMovement (filters){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/report/movmentReport`, filters)
}

export function stockMovementDownload (filters){
  axios.defaults.headers = {
    responseType: 'arraybuffer',
    ContentType: "application/pdf",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/report/movmentReport/download`, filters,{
    responseType: 'arraybuffer',
    headers: {
        Accept: 'application/pdf',
    },
  })
}

export function stockStatus (storeid){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/report/stockStatus`, storeid)
}
export function stockStatusDownload (filters){
  axios.defaults.headers = {
    responseType: 'arraybuffer',
    ContentType: "application/pdf",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/report/stockStatus/download`, filters,{
    responseType: 'arraybuffer',
    headers: {
        Accept: 'application/pdf',
    },
  })
}

export function getAllNot (){
  axios.defaults.headers = {
    ContentType: "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  }
  return axios.post(`${URL}/notification/getAllNot`)
}



