import { addStore ,updateStore,deleteStore} from "../api";



export async function add(store) {
  await addStore(store).then(res => {
    console.log(store)
  })
  return {
    type: "ADD_STORE",
    payload: store
  };
}

export async function update(store){

  var {id ,...reset }=store;
  var requset = {
    id,
    updatedData:reset
  }
  console.log(requset)
  await updateStore(requset).then(res=>{
    console.log(res)
  })
  return {
    type:"UPDATE_STORE",
    payload:"udated"
  }
}

export function deleteStoreAction(storeid){
  deleteStore({id:storeid}).then(res=>{

  })
  return {
    type:"DELETE_STORE",
    payload:""
  }
}