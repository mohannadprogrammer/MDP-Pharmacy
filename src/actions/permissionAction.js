import { addPermission ,updatePermission,deletePermission} from "../api";
export async function add(store) {
  await addPermission(store).then(res => {
    console.log(store)
  })
  return {
    type: "ADD_PERMISSION",
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
  await updatePermission(requset).then(res=>{
    console.log(res)
  })
  return {
    type:"UPDATE_PERMISSION",
    payload:"udated"
  }
}

export function deletePermissionAction(storeid){
    deletePermission({id:storeid}).then(res=>{

  })
  return {
    type:"DELETE_PERMISSION",
    payload:""
  }
}