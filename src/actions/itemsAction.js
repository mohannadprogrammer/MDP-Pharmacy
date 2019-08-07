import { getDatas , addUser} from "../api";


export  function getData(type) {
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


export  function add(user) {
   addUser(user).then(res=>{
     console.log(res)
   })
  return {
    type: "ADD_USER",
    payload: user
  };
}
