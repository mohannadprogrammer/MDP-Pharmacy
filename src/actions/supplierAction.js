import { addSupplier} from "../api";



export function add(supplier) {
    addSupplier(supplier).then(res => {
    console.log(supplier)
  })
  return {
    type: "ADD_SUPPLIER",
    payload: supplier
  };
}