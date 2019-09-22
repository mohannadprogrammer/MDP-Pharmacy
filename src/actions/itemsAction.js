import { getDatas, addItem,updateItem,deleteItem, getStock, getAllInvoic } from "../api";

export async function getData(type) {
  let data = await getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res.status);
    if (res.status === 200) {
      return res.data.data;
    } else {
      return false;
    }
  });
  console.log(data);
  if (!data) {
    data = [];
  }

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
    case "permission":
          actionName = "GET_PERMISSION";
          break;
    default:
      break;
    
  }

  return {
    type: actionName,
    payload: data
  };
}

export async function add(item) {
  await addItem(item).then(res => {
    console.log(res);
  });
  return {
    type: "ADD_ITEM",
    payload: item
  };
}

export async function update(item){

  var {id ,...reset }=item;
  var requset = {
    id,
    updatedData:reset
  }
  console.log(requset)
  await updateItem(requset).then(res=>{
    console.log(res)
  })
  return {
    type:"UPDATE_ITEM",
    payload:"udated"
  }
}

export function deleteItemAction(itemid){
  deleteItem({id:itemid}).then(res=>{

  })
  return {
    type:"DELETE_STORE",
    payload:""
  }
}
export function getStockData(storeid) {
  const stock = getStock(storeid).then(res => {
    console.log(res);
    return res.data.data;
  });
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
