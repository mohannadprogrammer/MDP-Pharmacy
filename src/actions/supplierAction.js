import { addSupplier , updateSupplier ,deleteSupplier, deleteStore} from "../api";



export function add(supplier) {
    addSupplier(supplier).then(res => {
    console.log(supplier)
  })
  return {
    type: "ADD_SUPPLIER",
    payload: supplier
  };
}
export async function update(supplier){

  var {id ,...reset }=supplier;
  var requset = {
    id,
    updatedData:reset
  }
  console.log(requset)
  await updateSupplier(requset).then(res=>{
    console.log(res)
  })
  return {
    type:"UPDATE_SUPPLIER",
    payload:"udated"
  }
}

export async function deleteSupplierAction(storeid){
  await deleteSupplier({id:storeid}).then(res=>{

  })
  return {
    type:"DELETE_STORE",
    payload:""
  }
}