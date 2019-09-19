import { addUnit ,updateUnit,deleteUnit} from "../api";



export async function add(store) {
  await addUnit(store).then(res => {
    
  })
  return {
    type: "ADD_UNIT",
    payload: store
  };
}

export async function update(store){

  var {id ,...reset }=store;
  var requset = {
    id,
    updatedData:reset
  }
  await updateUnit(requset).then(res=>{
    
  })
  return {
    type:"UPDATE_UNIT",
    payload:"udated"
  }
}

export function deleteUnitAction(storeid){
    deleteUnit({id:storeid}).then(res=>{

  })
  return {
    type:"DELETE_UNIT",
    payload:""
  }
}