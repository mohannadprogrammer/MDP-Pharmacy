import { getItemForSales,sale} from "../api";


export function getItemToSaleAction (info){
    const data = getItemForSales (info).then (res=>res.data.data)
    console.log(data)
    return{
        type:"GET_ITEM_TO_SALE",
        payload:data
    }
}

export function saleAction (bill){
    const data=sale(bill).then(res=>res.data.data)
    console.log(data)
    return{
        type:"SALE",
        payload:data
    }

}