import { addStore} from "../api";



export function add(store) {
  addStore(store).then(res => {
    console.log(store)
  })
  return {
    type: "ADD_STORE",
    payload: store
  };
}