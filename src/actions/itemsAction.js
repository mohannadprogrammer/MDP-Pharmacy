import { getDatas, addUser, getStock, getAllInvoic } from "../api";


export function getData(type) {
  const data = getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res);
    return res.data.data;
  });
  return {
    type: "GET_ITEMS",
    payload: data
  };
}


export function add(user) {
  addUser(user).then(res => {
    console.log(res)
  })
  return {
    type: "ADD_USER",
    payload: user
  };
}


export function getStockData(storeid) {
  const stock = getStock(storeid).then(res => {
    console.log(res);
    return res.data.data
  })
  console.log("lskdflksdlf")
  return {
    type: "GET_STOCK",
    payload: stock
  };
}


export function getAllInvoice() {
  const invoice = getAllInvoic().then(res => {
    console.log(res);
    return res.data.data
  })
  console.log("lskdflksdlf")
  return {
    type: "GET_INVOICE",
    payload: invoice
  };
}
