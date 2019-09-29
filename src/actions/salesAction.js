import { getItemForSales,addInvoice} from "../api";


export function getItemToSaleAction (info){
    const data = getItemForSales (info).then (res=>res.data.data)
    console.log(data)
    return{
        type:"GET_ITEM_TO_SALE",
        payload:data
    }
}
export function deleteFromSaleBill (id){
    return{
        type:"DELETE_FROM_ITEMSDETAILS",
        payload:id
    }
}
export function saleAction (bill,storeid){
    bill.storeid=storeid;
    const data=addInvoice(bill).then(res=>res.data.data)
    console.log(data)
    return{
        type:"SALE",
        payload:data
    }

}