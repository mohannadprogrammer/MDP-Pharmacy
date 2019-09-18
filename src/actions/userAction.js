import { getDatas, addUser ,deleteUser,updateItem} from "../api";


export function getData(type) {
  const data = getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res);
    return res.data.data;
  });
  return {
    type: "GET_ITEMS",
    payload:data
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
export async function update(user){
  var {id ,...reset }=user;
  var requset = {
    id,
    updatedData:reset
  }
  console.log(requset)
  await updateItem(requset).then(res=>{
    console.log(res)
  })
  return {
    type:"UPDATE_STORE",
    payload:""
  }
}

export  async function deleteUserAction (user){
  await deleteUser(user).then(res=>{

  })
  return {
    type:"DELETE_USER",
    payload:""
  }
}
