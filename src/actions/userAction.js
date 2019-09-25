import { getDatas, addUser ,disactiveUser,updateItem} from "../api";



export async function getData(type) {
  const data =await getDatas(type).then(res => {
    console.log("------------------------------------");
    console.log(res);
    return res.data.data;
  });
  return {
    type: "GET_ITEMS",
    payload:data
  };
}


export async function add(user) {
  await addUser(user).then(res => {
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
  await disactiveUser(user).then(res=>{

  })
  return {
    type:"DELETE_USER",
    payload:""
  }
}
