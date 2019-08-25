import { getDatas, addItem, getStock, getAllInvoic } from "../api";

export function getData(type) {
  const data = getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res);
    return res.data.data;
  });
  var actionName = "GET_ITEMS";
  switch (type) {
    case "unit":
      actionName = "GET_ITEMS_UNIT";
      break;
    case "store":
      actionName = "GET_STORES";
      break;
    case "supplier":
      actionName = "GET_SUPPLIERS";
      break;
  }

  return {
    type: actionName,
    payload: data
  };
}

export function add(item) {
  addItem(item).then(res => {
    console.log(res);
  });
  return {
    type: "ADD_ITEM",
    payload: item
  };
}

export function getStockData(storeid) {
  const stock = getStock(storeid).then(res => {
    console.log(res);
    return res.data.data;
  });
  console.log("lskdflksdlf");
  return {
    type: "GET_STOCK",
    payload: stock
  };
}

export function getAllInvoice() {
  const invoice = getAllInvoic().then(res => {
    console.log(res);
    return res.data.data;
  });

  return {
    type: "GET_INVOICE",
    payload: invoice
  };
}
