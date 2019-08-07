import api from "../api"

export function getItemToSale (){
    const data = api.getItemToSale ().then (res=>res)
    return{
        type:"GET_ITEM_TO_SALE",
        payload:data
    }
}

export function sale (){
    const res=api.sale().then(res=>res)
    return{
        type:"SALE",
        payload:res
    }

}